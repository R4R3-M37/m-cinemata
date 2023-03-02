import { combine, createEvent, createStore, sample } from 'effector'

import {
	movieBySearchQuery,
	newAnimeQuery,
	newCartoonsQuery,
	newFilmsQuery,
	newMoviesQuery,
	newSerialsQuery,
	top250MoviesQuery
} from '~/shared/api/fetch'
import { Movies } from '~/shared/api/types/movies'
import { history } from '~/shared/routing'

export const reset = createEvent()

const $movies = createStore<{ docs: Movies[]; pages: number | undefined }>({
	docs: [],
	pages: 1
}).reset(reset)

const $loading = createStore<boolean>(false)

sample({
	clock: [
		movieBySearchQuery.$data,
		newMoviesQuery.$data,
		newFilmsQuery.$data,
		newSerialsQuery.$data,
		newAnimeQuery.$data,
		newCartoonsQuery.$data,
		top250MoviesQuery.$data
	],
	source: $movies,
	fn: (data, newData) => ({
		docs: [...data.docs, ...(newData?.docs || [])],
		pages: newData?.pages
	}),
	target: $movies
})

sample({
	clock: [
		movieBySearchQuery.$pending,
		newMoviesQuery.$pending,
		newFilmsQuery.$pending,
		newSerialsQuery.$pending,
		newAnimeQuery.$pending,
		newCartoonsQuery.$pending,
		top250MoviesQuery.$pending
	],
	target: $loading
})

export const $data = combine({ data: $movies, loading: $loading })

history.listen(() => {
	reset()
})
