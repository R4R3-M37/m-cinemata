import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect, createEvent, sample } from 'effector'

import { genreFormatter } from '~/pages/genres/config'

import { moviesByGenreQuery } from '~/shared/api/service'
import { moviesByGenreRoute } from '~/shared/routing'

export const pageChanged = createEvent<number>()

const getDataFx = createEffect(({ route, page }: { route: RouteParamsAndQuery<{ genre: string }>; page: number }) => {
	moviesByGenreQuery.start({ genre: genreFormatter[route.params.genre], page })
})

sample({
	clock: pageChanged,
	source: moviesByGenreRoute.opened,
	fn: (source, clock) => ({ route: source, page: clock }),
	target: getDataFx
})
