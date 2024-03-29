import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect } from 'effector'

import { movieByIDQuery } from '~/shared/api/service'

export const fetchSimilarImagesFx = createEffect(({ params }: RouteParamsAndQuery<{ id: string }>) =>
	movieByIDQuery.start({ id: params.id })
)
