import { Combobox } from '@headlessui/react'
import { redirect } from 'atomic-router'
import { Link } from 'atomic-router-react'
import classlite from 'classlite'
import { createEffect, createEvent, sample } from 'effector'
import { useUnit } from 'effector-react'

import { FavoritesMovies } from '~/widgets/favorites-movies/ui/FavoritesMovies'
import { RecentMovies } from '~/widgets/recent-movies/RecentMovies'
import { SearchAutocomplete } from '~/widgets/search-autocomplete/SearchAutocomplete'

import { moviesByNameQuery, newMoviesQuery } from '~/shared/api/fetch'
import { genresExclusive } from '~/shared/assets/images/genres'
import { useDocumentMeta } from '~/shared/lib/hooks/useDocumentMeta'
import { movieLengthFormatter } from '~/shared/lib/movieLengthFormatter'
import { movieRoute, moviesBySearchRoute, searchRoute } from '~/shared/routing'
import { CardList } from '~/shared/ui/card-list/CardList'
import { CardListExclusive } from '~/shared/ui/card-list/CardListExclusive'
import { Image } from '~/shared/ui/Image'
import { LoadingTemplate } from '~/shared/ui/LoadingTemplate'
import { PageTitle } from '~/shared/ui/PageTitle'
import { Paragraph } from '~/shared/ui/Paragraph'

const pageChanged = createEvent<string>()

redirect({
	route: moviesBySearchRoute,
	clock: pageChanged,
	params: (payload) => ({ name: payload })
})

sample({
	clock: searchRoute.opened,
	target: createEffect(() => {
		newMoviesQuery.start({ page: 1 })
	})
})

export const SearchPage = () => {
	const newMovies = useUnit(newMoviesQuery.$data)
	const newMoviesLoading = useUnit(newMoviesQuery.$pending)

	const moviesAutocomplete = useUnit(moviesByNameQuery.$data)?.docs?.map(
		({ name, enName, alternativeName, year, movieLength, id, rating, slogan, poster }) => ({
			name,
			id,
			enName,
			alternativeName,
			slogan,
			year,
			movieLength,
			rating,
			photo: poster?.url
		})
	)
	const loading = useUnit(moviesByNameQuery.$pending)

	useDocumentMeta({ title: 'Cinemata | Поиск' })
	console.log(moviesAutocomplete, loading)
	return (
		<div className='container mx-auto'>
			<PageTitle title='Поиск' color='text-black dark:text-white' isUppercase={false} />
			<SearchAutocomplete isExtendedSettings={true} onSubmitClick={pageChanged} fetch={moviesByNameQuery.start}>
				{loading && <LoadingTemplate />}
				{!moviesAutocomplete?.length && !loading ? (
					<div className='relative cursor-default select-none py-2 px-4 dark:text-white'>
						Ничего не найдено.
					</div>
				) : (
					!loading &&
					moviesAutocomplete &&
					moviesAutocomplete.map((movie) => (
						<Link to={movieRoute} params={{ id: String(movie.id) }} key={movie.id}>
							<Combobox.Option
								className={({ active }) =>
									classlite(
										active ? 'font-bold' : 'font-medium',
										'relative cursor-default select-none py-2 pl-5 pr-4 dark:text-white'
									)
								}
								value={movie.name}>
								{({ selected }) => (
									<div className='relative flex'>
										{movie.rating && !!movie.rating.kp && (
											<div
												className={classlite(
													+movie.rating.kp >= 7 ? 'bg-emerald-700' : 'bg-gray-700',
													'absolute top-[5px] left-[-5px] rounded px-0.5 text-white'
												)}>
												<b>{movie.rating.kp.toFixed(1)}</b>
											</div>
										)}
										<Image className='h-[100px] rounded-sm' src={movie.photo} />
										<span
											className={classlite(
												selected ? 'font-semibold' : 'font-normal',
												'ml-2 block truncate'
											)}>
											{movie.name}
											<Paragraph>{movie.enName || movie.alternativeName}</Paragraph>
											<Paragraph>
												{movieLengthFormatter(movie?.movieLength)} ({movie?.year})
											</Paragraph>
										</span>
									</div>
								)}
							</Combobox.Option>
						</Link>
					))
				)}
			</SearchAutocomplete>
			<CardListExclusive data={genresExclusive} title='Жанры' />
			<CardList
				data={newMovies?.docs}
				loading={newMoviesLoading}
				title='Советуем посмотреть'
				linkParams={{ type: 'films-for-you' }}
			/>
			<FavoritesMovies />
			<RecentMovies />
		</div>
	)
}
