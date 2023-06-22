import { redirect } from 'atomic-router'
import { sample } from 'effector'
import { useStore } from 'effector-react'
import { useState } from 'react'

import { fetchMoviePersonsFx } from '~/pages/movie/api/fetchPersons'
import { MoviePersonsPageSkeleton } from '~/pages/movie/skeletons/MoviePersonsPageSkeleton'
import { AlternativeColPersonCard } from '~/pages/movie/ui/AlternativeColPersonCard'

import { movieByIDQuery } from '~/shared/api/service'
import { moviePersonsRoute, notFoundRoute } from '~/shared/routing'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { HeaderMovieList } from '~/shared/ui/HeaderMovieList'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'

sample({
	clock: moviePersonsRoute.opened,
	target: fetchMoviePersonsFx
})

export const MoviePersonsPage = () => {
	const [limit, setLimit] = useState<number>(10)

	const data = useStore(movieByIDQuery.$data)
	const loading = useStore(movieByIDQuery.$pending)

	const handleLoadMore = () => {
		setLimit((prev) => prev + 10)
	}

	if (!data) redirect({ route: notFoundRoute })
	if (!data && loading) {
		return <MoviePersonsPageSkeleton />
	}

	return (
		<>
			<HeaderGoBack title='Актёры' />
			<div className='container'>
				<HeaderMovieList title={data?.name || 'Кинопоиск'} />
				<div className='flex flex-col'>
					<section className='flex flex-col space-y-5 px-4'>
						{data?.persons?.slice(0, limit).map((person) => (
							<AlternativeColPersonCard
								id={person.id || 0}
								name={person.name || ''}
								enName={person.enName || ''}
								photo={person.photo || ''}
								key={person.id}
							/>
						))}
						{limit < Number(data?.persons?.length) && (
							<ShowMore
								loading={loading}
								onClick={handleLoadMore}
								className='flex h-[70px] flex-row items-center justify-center rounded-lg bg-d-secondary'
							/>
						)}
					</section>
				</div>
			</div>
		</>
	)
}
