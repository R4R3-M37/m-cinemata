import { createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'

export const addedToFavoritePersons = createEvent<string>()
export const removedFromFavoritePersons = createEvent<string>()

export const $favoritesPersons = createStore<string[]>([])

sample({
	clock: addedToFavoritePersons,
	source: $favoritesPersons,
	fn: (favorites, id) => {
		if (+id) {
			return [...favorites, id]
		}
		return favorites
	},
	target: $favoritesPersons
})

sample({
	clock: removedFromFavoritePersons,
	source: $favoritesPersons,
	fn: (favorites, id) => favorites.filter((favoriteId) => favoriteId !== id),
	target: $favoritesPersons
})

persist({ store: $favoritesPersons, key: 'favorites-persons' })
