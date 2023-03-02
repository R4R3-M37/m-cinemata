import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect, createEvent, createStore, sample } from 'effector'

import { reset } from '~/pages/online-cinema/model'

import {
	movieBySearchQuery,
	newAnimeQuery,
	newCartoonsQuery,
	newFilmsQuery,
	newMoviesQuery,
	newSerialsQuery,
	top250MoviesQuery
} from '~/shared/api/fetch'
import { onlineCinemaRoute } from '~/shared/routing'

export const pageChanged = createEvent<number>()

export const $page = createStore<number>(1).reset(reset)

const getDataFx = createEffect(({ page, params }: { page: number; params: RouteParamsAndQuery<{ type: string }> }) => {
	const { type } = params.params
	const { query } = params

	if (type === 'movie' && query) {
		movieBySearchQuery.start({ query, page })
	}

	switch (type) {
		case 'new-movies':
			newMoviesQuery.start({ page })
			break
		case 'films-for-you':
			newFilmsQuery.start({ page })
			break
		case 'serials-for-you':
			newSerialsQuery.start({ page })
			break
		case 'new-anime':
			newAnimeQuery.start({ page })
			break
		case 'new-cartoons':
			newCartoonsQuery.start({ page })
			break
		case 'top-250':
			top250MoviesQuery.start({ page })
			break
	}
})

sample({
	clock: onlineCinemaRoute.opened,
	target: createEffect(() => {
		pageChanged(1)
	})
})

sample({
	clock: pageChanged,
	source: onlineCinemaRoute.opened,
	fn: (source, clock) => {
		return { params: source, page: clock }
	},
	target: getDataFx
})

sample({
	clock: pageChanged,
	target: $page
})
