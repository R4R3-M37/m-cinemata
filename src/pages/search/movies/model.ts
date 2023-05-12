import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect, createEvent, createStore, sample } from 'effector'

import { moviesByNameQuery } from '~/shared/api/service'
import { Movies } from '~/shared/api/types/movies'
import { history, moviesBySearchRoute } from '~/shared/routing'

type DataStoreType = { docs: Movies[]; pages: number | undefined }

export const pageChanged = createEvent<number>()
export const reset = createEvent()

export const $data = createStore<DataStoreType | undefined>({ docs: [], pages: 1 }).reset(reset)

sample({
	clock: pageChanged,
	source: moviesBySearchRoute.opened,
	fn: (source, clock) => ({ route: source, page: clock }),
	target: createEffect(({ route, page }: { route: RouteParamsAndQuery<{ name: string }>; page: number }) => {
		moviesByNameQuery.start({ name: route.params.name, page })
	})
})

sample({
	clock: moviesByNameQuery.$data,
	source: $data,
	fn: (source, clock) => {
		if (!clock?.docs?.length) return
		if (source?.docs[0]?.id === clock.docs[0]?.id) {
			return { docs: [...clock.docs], pages: clock.pages }
		}

		return { docs: [...(source?.docs || []), ...clock.docs], pages: clock.pages }
	},
	target: $data
})

history.listen(() => {
	reset()
})
