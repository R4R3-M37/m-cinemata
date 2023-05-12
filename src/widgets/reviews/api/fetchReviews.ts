import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect, createEvent, sample } from 'effector'

import { reviewsByMovieIDQuery } from '~/shared/api/service'
import { movieRoute } from '~/shared/routing'

export const reviewsPageChanged = createEvent<number>()

const fetchReviewsFx = createEffect(
	({ route, page = 1 }: { route: RouteParamsAndQuery<{ id: string }>; page: number }) => {
		reviewsByMovieIDQuery.start({ id: route.params.id, page })
	}
)

sample({
	source: movieRoute.opened,
	fn: (route) => ({ route, page: 1 }),
	target: fetchReviewsFx
})

sample({
	clock: reviewsPageChanged,
	source: movieRoute.opened,
	fn: (route, page) => ({ route, page }),
	target: fetchReviewsFx
})
