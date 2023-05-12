import { useUnit } from 'effector-react'

import { FavoritesMovies } from '~/widgets/favorites-movies/FavoritesMovies'
import { RecentMovies } from '~/widgets/recent-movies/RecentMovies'

import { detectivesSerialsQuery, top10MoviesQuery, top250MoviesQuery } from '~/shared/api/service'
import { genresExclusive } from '~/shared/assets/images/genres'
import { CardList } from '~/shared/ui/card-list/CardList'
import { CardListExclusive } from '~/shared/ui/card-list/CardListExclusive'

export const Collections = () => {
	const top250Movies = useUnit(top250MoviesQuery.$data)
	const top250MoviesLoading = useUnit(top250MoviesQuery.$pending)

	const top10Movies = useUnit(top10MoviesQuery.$data)
	const top10MoviesLoading = useUnit(top10MoviesQuery.$pending)

	const detectivesSerials = useUnit(detectivesSerialsQuery.$data)
	const detectivesSerialsLoading = useUnit(detectivesSerialsQuery.$pending)

	return (
		<>
			<CardList
				data={top250Movies?.docs}
				loading={top250MoviesLoading}
				title='Топ-250 Кинопоиска'
				linkParams={{ type: 'top-250' }}
			/>
			<RecentMovies />
			<CardListExclusive data={genresExclusive} title='Жанры' />
			<CardList data={top10Movies?.docs} loading={top10MoviesLoading} title='Топ-10 Кинопоиска' />
			<FavoritesMovies />
			<CardList
				data={detectivesSerials?.docs}
				loading={detectivesSerialsLoading}
				title='Лучшие детективные сериалы'
			/>
		</>
	)
}
