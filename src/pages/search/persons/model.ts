import { RouteParamsAndQuery } from 'atomic-router'
import { createEffect, createEvent, createStore, sample } from 'effector'

import { personsByNameQuery } from '~/shared/api/service'
import { PersonRoot } from '~/shared/api/types/person'
import { history, personsBySearchRoute } from '~/shared/routing'

type DataStoreType = { docs: PersonRoot[]; pages: number | undefined }
export const pageChanged = createEvent<number>()
export const reset = createEvent()

export const $data = createStore<DataStoreType | undefined>({ docs: [], pages: 1 }).reset(reset)

sample({
	clock: pageChanged,
	source: personsBySearchRoute.opened,
	fn: (source, clock) => ({ route: source, page: clock }),
	target: createEffect(({ route, page }: { route: RouteParamsAndQuery<{ name: string }>; page: number }) => {
		personsByNameQuery.start({ name: route.params.name, page })
	})
})

sample({
	clock: personsByNameQuery.$data,
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
