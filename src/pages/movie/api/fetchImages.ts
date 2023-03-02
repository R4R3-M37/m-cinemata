import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect } from 'effector'

import { imagesByMovieIDQuery } from '~/shared/api/fetch'

export const fetchMovieImagesFx = createEffect(
	({ route, page }: { route: RouteParamsAndQuery<{ id: string }>; page: number }) => {
		imagesByMovieIDQuery.start({ id: route.params.id, page })
	}
)
