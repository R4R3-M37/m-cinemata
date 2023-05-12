import { combine, createEvent, createStore, sample } from 'effector'

import { imagesByMovieIDQuery } from '~/shared/api/service'
import { MovieImagesRoot } from '~/shared/api/types/movies'
import { history, movieImagesRoute } from '~/shared/routing'

export const pageChanged = createEvent<number>()
const reset = createEvent()

const $images = createStore<MovieImagesRoot | null>(null).reset(reset)
const $loading = createStore<boolean>(false)

sample({
	clock: imagesByMovieIDQuery.$data,
	source: $images,
	fn: (source, clock) => {
		if (!source) {
			return clock
		}

		return { ...clock, items: [...(source?.items || []), ...(clock?.items || [])] }
	},
	target: $images
})

sample({
	clock: imagesByMovieIDQuery.$pending,
	target: $loading
})

export const $data = combine({ data: $images, loading: $loading })

sample({
	clock: movieImagesRoute.opened,
	fn: () => 1,
	target: pageChanged
})

history.listen(() => {
	reset()
})
