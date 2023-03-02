import { createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'

export const addedToFavoriteMovies = createEvent<string>()
export const removedFromFavoriteMovies = createEvent<string>()

export const $favoritesMovies = createStore<string[]>([])

sample({
	clock: addedToFavoriteMovies,
	source: $favoritesMovies,
	fn: (favorites, id) => {
		if (+id) {
			return [id, ...favorites]
		}

		return favorites
	},
	target: $favoritesMovies
})

sample({
	clock: removedFromFavoriteMovies,
	source: $favoritesMovies,
	fn: (favorites, id) => favorites.filter((favoriteId) => favoriteId !== id),
	target: $favoritesMovies
})

persist({ store: $favoritesMovies, key: 'favorites-movies' })
