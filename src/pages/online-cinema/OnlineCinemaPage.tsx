import { redirect } from 'atomic-router'
import { useUnit } from 'effector-react'
import { useState } from 'react'

import { pageChanged } from '~/pages/online-cinema/api'
import { titleFormatter } from '~/pages/online-cinema/config'
import { $data } from '~/pages/online-cinema/model'

import { notFoundRoute, onlineCinemaRoute } from '~/shared/routing'
import { Card } from '~/shared/ui/card/Card'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'
import { ColSkeletonPageWithHeader } from '~/shared/ui/skeletons/ColSkeletonPageWithHeader'

export const OnlineCinemaPage = () => {
	const [page, setPage] = useState<number>(1)

	const { data, loading } = useUnit($data)
	const changed = useUnit(pageChanged)

	const { type } = useUnit(onlineCinemaRoute.$params)

	const handleChangePage = () => {
		setPage((page) => changed(page + 1))
	}

	if (!data) redirect({ route: notFoundRoute })
	if (!data && loading) {
		return <ColSkeletonPageWithHeader />
	}

	return (
		<>
			<HeaderGoBack title='Онлайн-кинотеатр' />
			<div className='container mx-auto px-5'>
				<h2 className='flex h-14 h-14 items-center items-center justify-between bg-white dark:bg-d-primary'>
					<div className='text-bold flex items-center space-x-3 font-mono font-mono text-2xl'>
						<b>{titleFormatter[type] || 'Кинопоиск'}</b>
					</div>
				</h2>
				<div className='flex flex-col items-center space-x-5'>
					<section className='grid grid-cols-2 gap-4'>
						{data.docs.map((movie, i) => (
							<Card
								className='w-[130px]'
								id={String(movie.id)}
								rating={movie.rating}
								poster={movie.poster}
								name={movie.name || ''}
								enName={movie.enName || ''}
								alternativeName={movie.alternativeName || ''}
								key={i}
							/>
						))}
						{page < (data?.pages || 0) && (
							<ShowMore
								onClick={handleChangePage}
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
