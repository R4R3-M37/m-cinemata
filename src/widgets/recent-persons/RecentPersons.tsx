import { useUnit } from 'effector-react'

import { $recentPersons } from '~/widgets/recent-persons/model'

import { recentPersonsQuery } from '~/shared/api/fetch'
import { sortDataByIDs } from '~/shared/lib/sortDataByIDs'
import { PersonsCardList } from '~/shared/ui/card-list/PersonsCardList'

export const RecentPersons = () => {
	const recentPersonsIDs = useUnit($recentPersons)
	const recentPersons = useUnit(recentPersonsQuery.$data)
	const recentPersonsLoading = useUnit(recentPersonsQuery.$pending)

	if (!recentPersons) return null

	return (
		<PersonsCardList
			title='Недавние актёры'
			data={sortDataByIDs({ data: recentPersons, ids: recentPersonsIDs })}
			loading={recentPersonsLoading}
		/>
	)
}
