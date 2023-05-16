import { createEffect, sample } from 'effector'
import { useUnit } from 'effector-react'

import { $favoritesMovies } from '~/features/movie-add-to-favorite/model'

import { moviesByIDsQuery } from '~/shared/api/service'
import { sortDataByIDs } from '~/shared/lib/sortDataByIDs'
import { homeRoute, myRoute, searchRoute } from '~/shared/routing'
import { CardList } from '~/shared/ui/card-list/CardList'

sample({
	clock: [homeRoute.opened, myRoute.opened, searchRoute.opened],
	source: $favoritesMovies,
	target: createEffect((favoritesIDs: string[]) => {
		if (favoritesIDs.length) {
			moviesByIDsQuery.start({ ids: favoritesIDs })
		}
	})
})

export const FavoritesMovies = () => {
	const favoritesIDs = useUnit($favoritesMovies)
	const favoritesMovies = useUnit(moviesByIDsQuery.$data)
	const favoritesMoviesLoading = useUnit(moviesByIDsQuery.$pending)

	return (
		<>
			{!!favoritesIDs.length && (
				<CardList
					data={sortDataByIDs({ data: favoritesMovies, ids: favoritesIDs })}
					count={favoritesMovies?.docs?.length}
					loading={favoritesMoviesLoading}
					title='Вы хотели посмотреть'
				/>
			)}
		</>
	)
}
