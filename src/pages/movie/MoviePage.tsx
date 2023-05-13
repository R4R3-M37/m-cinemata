import 'dayjs/locale/ru'
import { redirect } from 'atomic-router'
import { sample } from 'effector'
import { useStore, useUnit } from 'effector-react'
import { Helmet } from 'react-helmet'

import { fetchMovieDataFx } from '~/pages/movie/api/fetchMovie'
import { MoviePageSkeleton } from '~/pages/movie/skeletons/MoviePageSkeleton'
import { BasicInformation } from '~/pages/movie/ui/BasicInformation'
import { Description } from '~/pages/movie/ui/Description'
import { Images } from '~/pages/movie/ui/Images'
import { MovieOptions } from '~/pages/movie/ui/MovieOptions'
import { Persons } from '~/pages/movie/ui/Persons'
import { Rating } from '~/pages/movie/ui/Rating'
import { Rental } from '~/pages/movie/ui/Rental'
import { SequelsAndPrequels } from '~/pages/movie/ui/SequelsAndPrequels'
import { SimilarMovies } from '~/pages/movie/ui/SimilarMovies'
import { Trailers } from '~/pages/movie/ui/Trailers'

import { Facts } from '~/widgets/facts/Facts'
import { addedToRecent } from '~/widgets/recent-movies/model'
import { Reviews } from '~/widgets/reviews/Reviews'

import { WatchMovie } from '~/features/watch-movie/WatchMovie'

import { ImageBackground } from '~/entities/movie/ImageBackground'
import { MovieLogo } from '~/entities/movie/MovieLogo'
import { PersonsPreview } from '~/entities/movie/PersonsPreview'

import { movieByIDQuery } from '~/shared/api/service'
import { movieRoute, notFoundRoute } from '~/shared/routing'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'

sample({
	clock: [movieRoute.opened, movieRoute.updated],
	target: fetchMovieDataFx
})

export const MoviePage = () => {
	const { id } = useUnit(movieRoute.$params)

	const movie = useStore(movieByIDQuery.$data)
	const loading = useStore(movieByIDQuery.$pending)

	const movieName = movie?.name || movie?.enName || movie?.alternativeName || ''
	const ticketsOnSale = !!movie?.ticketsOnSale
	const movieEnName = movie?.enName || movie?.alternativeName || ''
	const ratingKp = movie?.rating?.kp?.toFixed(1) || 0
	const movieImage = movie?.poster?.url || ''
	const backdropImage = movie?.backdrop?.url || movie?.poster?.url || ''

	if ((movie && 'message' in movie) || (!movie && !loading)) redirect({ route: notFoundRoute })
	if (loading) {
		return <MoviePageSkeleton />
	} else {
		addedToRecent(String(id))
	}

	return (
		<>
			<Helmet>
				<title>{`Cinemata | ${movieName ? movieName : 'Загрузка...'} ${
					movie?.year ? `(${movie?.year})` : ''
				}`}</title>
				<link rel='canonical' href='https://m-cinemata.vercel.app' />
				<meta name='description' content={movie?.shortDescription || movie?.description || ''} />
				<meta property='og:image' content={movieImage} />
			</Helmet>
			<HeaderGoBack redirectToSearch={true} />
			<ImageBackground src={movieImage} backdropImage={backdropImage} />
			<div className='relative z-50'>
				<div className='flex flex-col items-center justify-center text-center'>
					<MovieLogo src={movie?.logo?.url} name={movie?.name || 'Нет названия'} />
					<BasicInformation
						top250={movie?.top250}
						votes={movie?.votes}
						ageRating={movie?.ageRating}
						ratingKp={ratingKp}
						year={movie?.year}
						alternativeName={movieEnName}
						genres={movie?.genres?.map(({ name }) => name).join(', ')}
						country={movie?.countries && movie.countries[0].name}
						movieLength={movie?.movieLength}
						seriesLength={movie?.seriesLength}
					/>
					<WatchMovie id={id} ticketsOnSale={ticketsOnSale} />
					<PersonsPreview id={id} persons={movie?.persons} />
					<MovieOptions id={id} name={movieName} image={movieImage || backdropImage} />
				</div>
			</div>
			<hr className='my-6 -mx-4 h-px border-0 bg-gray-200 dark:bg-gray-700' />
			<Description description={movie?.description} shortDescription={movie?.shortDescription} />
			<Trailers videos={movie?.videos} />
			<Rating rating={movie?.rating} votes={movie?.votes} ratingKp={ratingKp} />
			<Reviews />
			<Persons persons={movie?.persons?.filter(({ name }) => name) || []} id={id} />
			<Images id={id} />
			<Facts facts={movie?.facts} />
			<Rental id={id} premiere={movie?.premiere} />
			<SequelsAndPrequels id={id} sequelsAndPrequels={movie?.sequelsAndPrequels?.filter(({ name }) => name)} />
			<SimilarMovies similarMovies={movie?.similarMovies?.filter(({ name }) => name)} id={id} />
		</>
	)
}
