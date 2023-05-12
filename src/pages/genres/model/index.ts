import { createEvent, createStore, sample } from 'effector'

import { moviesByGenreQuery } from '~/shared/api/service'
import { Movies } from '~/shared/api/types/movies'
import { history } from '~/shared/routing'

export const reset = createEvent()
export const $data = createStore<{ docs: Movies[]; pages: number | undefined } | undefined>({
	docs: [],
	pages: 1
}).reset(reset)

sample({
	clock: moviesByGenreQuery.$data,
	source: $data,
	fn: (source, clock) => {
		if (!clock?.docs) return
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
