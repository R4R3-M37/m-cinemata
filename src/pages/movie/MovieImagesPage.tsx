import { redirect } from 'atomic-router'
import { sample } from 'effector'
import { useStore } from 'effector-react'
import { useState } from 'react'

import { fetchMovieImagesFx } from '~/pages/movie/api/fetchImages'
import { $data, pageChanged } from '~/pages/movie/model/images'

import { movieImagesRoute, notFoundRoute } from '~/shared/routing'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'

sample({
	source: movieImagesRoute.opened,
	clock: pageChanged,
	fn: (route, page) => ({ route, page }),
	target: fetchMovieImagesFx
})

export const MovieImagesPage = () => {
	const [page, setPage] = useState<number>(1)

	const { data, loading } = useStore($data)

	const handleLoadMore = () => {
		setPage((prev) => pageChanged(prev + 1))
	}

	if (!data) redirect({ route: notFoundRoute })
	if (!data?.items && loading) {
		return (
			<>
				<HeaderGoBack title='Изображения' />
				<div className='container mx-auto px-5'>
					<div className='flex flex-col items-center space-x-5'>
						<section className='grid grid-cols-1 gap-4'>
							{Array.from({ length: 20 }).map((_, i) => (
								<div className='animate-pulse' role='status' key={i}>
									<div className='flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700'>
										<svg
											className='w-[300px] h-12 text-gray-200'
											xmlns='http://www.w3.org/2000/svg'
											aria-hidden='true'
											fill='currentColor'
											viewBox='0 0 640 512'>
											<path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
										</svg>
									</div>
								</div>
							))}
						</section>
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<HeaderGoBack title='Изображения' />
			<div className='container mx-auto px-5'>
				<div className='flex flex-col items-center space-x-5'>
					<section className='grid grid-cols-1 gap-4'>
						{data?.items?.map(({ imageUrl }, i) => (
							<img src={imageUrl} alt='' key={i} />
						))}
						{page < (data?.totalPages || 1) && (
							<ShowMore
								loading={loading}
								className='flex h-[70px] flex-row items-center justify-center rounded-lg bg-d-secondary'
								onClick={handleLoadMore}
								title='Показать ещё'
							/>
						)}
					</section>
				</div>
			</div>
		</>
	)
}
