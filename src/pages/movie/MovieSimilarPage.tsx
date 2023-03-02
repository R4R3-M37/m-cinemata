import { redirect } from 'atomic-router'
import { sample } from 'effector'
import { useStore } from 'effector-react'
import { useState } from 'react'

import { fetchSimilarImagesFx } from '~/pages/movie/api/fetchSimilar'

import { movieByIDQuery } from '~/shared/api/fetch'
import { movieSimilarRoute, notFoundRoute } from '~/shared/routing'
import { Card } from '~/shared/ui/card/Card'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { HeaderMovieList } from '~/shared/ui/HeaderMovieList'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'
import { ColSkeletonPageWithHeader } from '~/shared/ui/skeletons/ColSkeletonPageWithHeader'

sample({
	clock: movieSimilarRoute.opened,
	target: fetchSimilarImagesFx
})

export const MovieSimilarPage = () => {
	const [limit, setLimit] = useState<number>(10)

	const movie = useStore(movieByIDQuery.$data)
	const loading = useStore(movieByIDQuery.$pending)

	const handleLoadMore = () => {
		setLimit((prev) => prev + 10)
	}

	if (!movie) redirect({ route: notFoundRoute })
	if (!movie && loading) {
		return <ColSkeletonPageWithHeader />
	}

	return (
		<>
			<HeaderGoBack title='Похожие фильмы' />
			<div className='container mx-auto px-5'>
				<HeaderMovieList title={movie?.name || 'Кинопоиск'} />
				<div className='flex flex-col items-center space-x-5'>
					<section className='grid grid-cols-2 gap-4'>
						{movie?.similarMovies?.slice(0, limit).map((movie) => (
							<Card
								className='mr-5 mt-5 w-full'
								id={String(movie.id)}
								name={movie.name || ''}
								enName={movie.enName || ''}
								alternativeName={movie.alternativeName || ''}
								poster={movie.poster}
								key={movie.id}
							/>
						))}
						{limit < (movie?.similarMovies?.length || 0) && (
							<ShowMore loading={loading} onClick={handleLoadMore} className='!h-[70px] w-[300px]' />
						)}
					</section>
				</div>
			</div>
		</>
	)
}
