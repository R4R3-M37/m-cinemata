import { createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'

import { fetchRecentMovies } from '~/widgets/recent-movies/api/fetch'

import { homeRoute, myRoute, searchRoute } from '~/shared/routing'

export const addedToRecent = createEvent<string>()

export const $recentMovies = createStore<string[]>([]).on(addedToRecent, (recent, id) => {
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
})

sample({
	clock: [homeRoute.opened, myRoute.opened, searchRoute.opened],
	source: $recentMovies,
	target: fetchRecentMovies
})

persist({ store: $recentMovies, key: 'recent-movies' })
