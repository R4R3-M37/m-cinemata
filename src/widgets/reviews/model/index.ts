import { createEvent, createStore, sample } from 'effector'

import { reviewsByMovieIDQuery } from '~/shared/api/service'
import { ReviewsRoot } from '~/shared/api/types/reviews'
import { history } from '~/shared/routing'

const reset = createEvent()
export const $reviews = createStore<ReviewsRoot | null>(null).reset(reset)

sample({
	clock: reviewsByMovieIDQuery.$data,
	source: $reviews,
	fn: (source, clock): ReviewsRoot | null => {
		if (!source) {
			return clock
		}

		if (!clock) {
			return source
		}

		return {
			...clock,
			items: [...(source?.items || []), ...(clock?.items || [])]
		}
	},
	target: $reviews
})

history.listen(() => {
	reset()
})
