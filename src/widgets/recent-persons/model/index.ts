import { createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'

import { fetchRecentPersonsFx } from '~/widgets/recent-persons/api/fetch'

import { myRoute, personsRoute } from '~/shared/routing'

export const addedToRecent = createEvent<string>()

export const $recentPersons = createStore<string[]>([])

sample({
	clock: [personsRoute.opened, myRoute.opened],
	source: $recentPersons,
	target: fetchRecentPersonsFx
})

sample({
	clock: addedToRecent,
	source: $recentPersons,
	fn: (recent, id) => {
		const recentFormatted = recent.slice(0, 10)
		if (!id) return recentFormatted
		if (!Number(id)) return recentFormatted

		if (recentFormatted.includes(id)) {
			return [id, ...recentFormatted.filter((recentID) => recentID !== id)]
		}

		if (recentFormatted.length === 10) {
			return [id, ...recentFormatted.slice(0, 9)]
		}

		return [id, ...recentFormatted]
	},
	target: $recentPersons
})

persist({ store: $recentPersons, key: 'recent-persons' })
