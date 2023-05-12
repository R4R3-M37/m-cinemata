import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect } from 'effector/effector.umd'

import { movieByIDQuery } from '~/shared/api/service'

export const fetchMovieSequelsPrequelsFx = createEffect(({ params }: RouteParamsAndQuery<{ id: string }>) =>
	movieByIDQuery.start({ id: params.id })
)
