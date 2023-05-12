import { useUnit } from 'effector-react'

import { $recentMovies } from '~/widgets/recent-movies/model'

import { recentMoviesByIDsQuery } from '~/shared/api/service'
import { sortDataByIDs } from '~/shared/lib/sortDataByIDs'
import { CardList } from '~/shared/ui/card-list/CardList'

export const RecentMovies = () => {
	const recentIDs = useUnit($recentMovies)
	const recentMovies = useUnit(recentMoviesByIDsQuery.$data)
	const recentMoviesLoading = useUnit(recentMoviesByIDsQuery.$pending)

	if (!recentMovies) return null

	return (
		<>
			{!!recentIDs.length && (
				<CardList
					data={sortDataByIDs({ data: recentMovies, ids: recentIDs })}
					loading={recentMoviesLoading}
					count={recentMovies?.docs?.length}
					title='Недавнее'
				/>
			)}
		</>
	)
}
