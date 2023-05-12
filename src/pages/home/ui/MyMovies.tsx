import { useUnit } from 'effector-react'

import { FavoritesMovies } from '~/widgets/favorites-movies/FavoritesMovies'
import { RecentMovies } from '~/widgets/recent-movies/RecentMovies'

import {
	bestComedyQuery,
	bestCountOfVotesQuery,
	bestHorrorsQuery,
	comedyAnimeQuery,
	horrorsAnimeQuery,
	newAnimeQuery,
	newCartoonsQuery,
	newDetectivesQuery,
	newFilmsQuery,
	newMoviesQuery,
	newSerialsQuery,
	sciFiSerialsQuery
} from '~/shared/api/service'
import { CardList } from '~/shared/ui/card-list/CardList'

export const MyMovies = () => {
	const newFilms = useUnit(newFilmsQuery.$data)
	const newFilmsLoading = useUnit(newFilmsQuery.$pending)

	const newSerial = useUnit(newSerialsQuery.$data)
	const newSerialLoading = useUnit(newSerialsQuery.$pending)

	const newMovies = useUnit(newMoviesQuery.$data)
	const newMoviesLoading = useUnit(newMoviesQuery.$pending)

	const bestHorrors = useUnit(bestHorrorsQuery.$data)
	const bestHorrorsLoading = useUnit(bestHorrorsQuery.$pending)

	const bestCountOfVotes = useUnit(bestCountOfVotesQuery.$data)
	const bestCountOfVotesLoading = useUnit(bestCountOfVotesQuery.$pending)

	const sciFiSerials = useUnit(sciFiSerialsQuery.$data)
	const sciFiSerialsLoading = useUnit(sciFiSerialsQuery.$pending)

	const comedyAnime = useUnit(comedyAnimeQuery.$data)
	const comedyAnimeLoading = useUnit(comedyAnimeQuery.$pending)

	const newAnime = useUnit(newAnimeQuery.$data)
	const newAnimeLoading = useUnit(newAnimeQuery.$pending)

	const newCartoons = useUnit(newCartoonsQuery.$data)
	const newCartoonsLoading = useUnit(newCartoonsQuery.$pending)

	const horrorsAnime = useUnit(horrorsAnimeQuery.$data)
	const horrorsAnimeLoading = useUnit(horrorsAnimeQuery.$pending)

	const newDetectives = useUnit(newDetectivesQuery.$data)
	const newDetectivesLoading = useUnit(newDetectivesQuery.$pending)

	const bestComedy = useUnit(bestComedyQuery.$data)
	const bestComedyLoading = useUnit(bestComedyQuery.$pending)

	return (
		<>
			<CardList
				data={newFilms?.docs}
				loading={newFilmsLoading}
				title='Фильмы для вас'
				linkParams={{ type: 'films-for-you' }}
			/>
			<CardList
				data={newSerial?.docs}
				loading={newSerialLoading}
				title='Рекомендуем сериалы'
				linkParams={{ type: 'serials-for-you' }}
			/>
			<CardList
				data={newMovies?.docs}
				loading={newMoviesLoading}
				title='Новинки'
				linkParams={{ type: 'new-movies' }}
			/>
			<CardList data={bestHorrors?.docs} loading={bestHorrorsLoading} title='Любимые страшилки' />
			<CardList
				data={bestCountOfVotes?.docs}
				loading={bestCountOfVotesLoading}
				title='С большим количеством оценок'
				linkParams={{ type: 'best-count-votes' }}
			/>
			<CardList data={sciFiSerials?.docs} loading={sciFiSerialsLoading} title='Фантастические сериалы' />
			<CardList data={comedyAnime?.docs} loading={comedyAnimeLoading} title='Комедийные аниме' />
			<FavoritesMovies />
			<CardList
				data={newAnime?.docs}
				loading={newAnimeLoading}
				title='Аниме'
				linkParams={{ type: 'new-anime' }}
			/>
			<RecentMovies />
			<CardList
				data={newCartoons?.docs}
				loading={newCartoonsLoading}
				title='Мультфильмы'
				linkParams={{ type: 'new-cartoons' }}
			/>
			<CardList data={horrorsAnime?.docs} loading={horrorsAnimeLoading} title='Лучшие аниме-хорроры' />
			<CardList data={newDetectives?.docs} loading={newDetectivesLoading} title='Новые детективы' />
			<CardList data={bestComedy?.docs} loading={bestComedyLoading} title='Любимые комедии' />
		</>
	)
}
