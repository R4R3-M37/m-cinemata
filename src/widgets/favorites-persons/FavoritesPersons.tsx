import { createEffect, sample } from 'effector'
import { useUnit } from 'effector-react'

import { $favoritesPersons } from '~/features/person-add-to-favorite/model'

import { personsByIDsQuery } from '~/shared/api/service'
import { sortDataByIDs } from '~/shared/lib/sortDataByIDs'
import { myRoute, personsRoute } from '~/shared/routing'
import { PersonsCardList } from '~/shared/ui/card-list/PersonsCardList'

sample({
	clock: [personsRoute.opened, myRoute.opened],
	source: $favoritesPersons,
	target: createEffect((favoritesIDs: string[]) => {
		console.log()
		if (favoritesIDs.length) {
			personsByIDsQuery.start({ ids: favoritesIDs })
		}
	})
})

export const FavoritesPersons = () => {
	const favoritesIDs = useUnit($favoritesPersons)
	const favoritesPersons = useUnit(personsByIDsQuery.$data)
	const favoritesPersonsLoading = useUnit(personsByIDsQuery.$pending)

	if (!favoritesPersons) return null

	return (
		<PersonsCardList
			title='Любимые актёры'
			data={sortDataByIDs({ data: favoritesPersons, ids: favoritesIDs })}
			loading={favoritesPersonsLoading}
		/>
	)
}
