import { redirect } from 'atomic-router'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'

import { $data, pageChanged } from '~/pages/search/movies/model'

import { moviesByNameQuery } from '~/shared/api/service'
import { moviesBySearchRoute, notFoundRoute } from '~/shared/routing'
import { Card } from '~/shared/ui/card/Card'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'
import { ColSkeletonPageWithHeader } from '~/shared/ui/skeletons/ColSkeletonPageWithHeader'

export const SearchMoviesPage = () => {
	const { name } = useUnit(moviesBySearchRoute.$params)

	const data = useUnit($data)
	const loading = useUnit(moviesByNameQuery.$pending)

	const [page, setPage] = useState<number>(1)
	const changePage = useUnit(pageChanged)

	const handleChangePage = () => {
		setPage((prev) => prev + 1)
		changePage(page)
	}

	useEffect(() => {
		pageChanged(1)
	}, [])

	if (!data) redirect({ route: notFoundRoute })
	if (!data?.docs.length) {
		return <ColSkeletonPageWithHeader />
	}

	return (
		<>
			<HeaderGoBack title={`Поиск (${decodeURI(name)})`} />
			<div className='container mx-auto px-5'>
				<div className='flex flex-col items-center space-x-5'>
					<section className='grid grid-cols-2 gap-4'>
						{data.docs.map((movie, i) => (
							<Card
								className='w-[130px]'
								id={String(movie.id)}
								rating={movie.rating}
								poster={movie?.poster}
								name={movie?.name || ''}
								enName={movie?.enName || ''}
								alternativeName={movie?.alternativeName || ''}
								key={i}
							/>
						))}
						{page < (data?.pages || 1) && (
							<ShowMore
								loading={loading}
								onClick={handleChangePage}
								title='Показать ещё'
								className='flex h-[70px] w-[300px] flex-row items-center justify-center rounded-lg bg-d-secondary'
							/>
						)}
					</section>
				</div>
			</div>
		</>
	)
}
