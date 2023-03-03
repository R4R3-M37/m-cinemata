import { redirect } from 'atomic-router'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'

import { pageChanged } from '~/pages/genres/api'
import { genreFormatter } from '~/pages/genres/config'
import { $data } from '~/pages/genres/model'

import { moviesByGenreQuery } from '~/shared/api/fetch'
import { moviesByGenreRoute, notFoundRoute } from '~/shared/routing'
import { Card } from '~/shared/ui/card/Card'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'
import { ColSkeletonPageWithHeader } from '~/shared/ui/skeletons/ColSkeletonPageWithHeader'

export const MoviesByGenrePage = () => {
	const { genre } = useUnit(moviesByGenreRoute.$params)

	const data = useUnit($data)
	const loading = useUnit(moviesByGenreQuery.$pending)

	const [page, setPage] = useState<number>(1)
	const changePage = useUnit(pageChanged)

	useEffect(() => {
		changePage(page)
	}, [page])

	if (!data?.docs.length) redirect({ route: notFoundRoute })
	if (!data?.docs.length && loading) {
		return <ColSkeletonPageWithHeader />
	}

	return (
		<>
			<HeaderGoBack title={genreFormatter[genre]} />
			<div className='container mx-auto px-5'>
				<div className='flex flex-col items-center space-x-5'>
					<section className='grid grid-cols-2 gap-4'>
						{data?.docs.map((movie, i) => (
							<Card
								className='w-[150px]'
								id={String(movie.id)}
								rating={movie.rating}
								poster={movie.poster}
								name={movie.name || ''}
								enName={movie.enName || ''}
								alternativeName={movie.alternativeName || ''}
								key={i}
							/>
						))}
						{page < (data?.pages || 1) && (
							<ShowMore
								onClick={() => setPage((prev) => prev + 1)}
								loading={loading}
								className='flex h-[70px] w-[300px] flex-row items-center justify-center rounded-lg bg-d-secondary'
							/>
						)}
					</section>
				</div>
			</div>
		</>
	)
}
