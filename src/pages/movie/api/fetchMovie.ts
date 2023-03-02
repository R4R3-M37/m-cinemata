import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect } from 'effector'

import { imagesByMovieIDQuery, movieByIDQuery } from '~/shared/api/fetch'

export const fetchMovieDataFx = createEffect(({ params }: RouteParamsAndQuery<{ id: string }>) => {
	movieByIDQuery.start({ id: params.id })
	imagesByMovieIDQuery.start({ id: params.id })
})
