import dayjs from 'dayjs'
import { useUnit } from 'effector-react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { reviewsPageChanged } from '~/widgets/reviews/api/fetchReviews'
import { $reviews } from '~/widgets/reviews/model'

import { AiFillDislike, AiFillLike } from '~/shared/icons'
import { BottomPopup } from '~/shared/ui/bottom-popup/BottomPopup'
import { createBottomPopupApi } from '~/shared/ui/bottom-popup/model'

const popup = createBottomPopupApi()

export const Reviews = () => {
	const { isActive, changed } = useUnit(popup)
	const [page, setPage] = useState<number>(1)
	const changePage = useUnit(reviewsPageChanged)

	const [activeDataIndex, setActiveDataIndex] = useState<number>(0)
	const reviews = useUnit($reviews)

	const handleOpenReview = (index: number) => {
		setActiveDataIndex(index)
		changed(true)
	}

	const handleLoadMore = () => {
		if (page < (reviews?.totalPages || 0)) {
			setPage((prev) => changePage(prev + 1))
		}
	}

	if (!reviews) return null
	if (!reviews?.items?.length) return null

	return (
		<>
			<section>
				<div className='mt-4 flex overflow-auto'>
					<div className='flex items-center overflow-y-hidden'>
						<Swiper onReachEnd={handleLoadMore} spaceBetween={50} slidesPerView={1}>
							{reviews?.items?.map(
								(
									{
										author = 'Аноним',
										title,
										description,
										date,
										positiveRating,
										negativeRating,
										type
									},
									i
								) => (
									<SwiperSlide key={`${title}_${date}_${author}`}>
										<div className='mb-4 flex items-center space-x-4'>
											<div className='relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600'>
												<span className='font-medium text-gray-600 dark:text-gray-300'>
													{author[0]}
												</span>
											</div>
											<div className='space-y-1 font-medium dark:text-white'>
												<p>{author}</p>
												<span className='flex space-x-2'>
													<b className='flex items-center text-green-500'>
														({positiveRating}
														<AiFillLike />
													</b>
													<b>/</b>
													<b className='flex items-center text-red-500'>
														{negativeRating} <AiFillDislike />)
													</b>
												</span>
												<time
													dateTime={date}
													className='block text-sm text-gray-500 dark:text-gray-400'>
													{date && dayjs(new Date(date)).locale('ru').format('DD MMMM YYYY')}
												</time>
											</div>
										</div>
										<div className='mb-1 flex items-center'>
											<h3
												className={`${
													(type === 'POSITIVE' && '!text-green-500') ||
													(type === 'NEGATIVE' && '!text-red-500') ||
													(type === 'NEUTRAL' && 'dark:text-white')
												} text-xl font-semibold text-gray-900`}>
												{title || description?.slice(0, 30) + '...'}
											</h3>
										</div>
										<p
											className='mb-2 text-gray-500 dark:text-gray-400'
											dangerouslySetInnerHTML={{
												__html:
													(description && description.length > 275
														? description?.slice(0, 275) + '...'
														: description) || ''
											}}
										/>
										<div
											className='block cursor-pointer text-sm font-bold hover:underline'
											onClick={() => handleOpenReview(i)}>
											Подробнее
										</div>
									</SwiperSlide>
								)
							)}
						</Swiper>
					</div>
				</div>
			</section>
			<BottomPopup isActive={isActive} changed={changed}>
				<div className='h-[500px] px-6'>
					<article onClick={() => changed(true)} className='h-full overflow-y-auto pb-24'>
						<div className='mb-4 flex items-center space-x-4'>
							<div className='relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600'>
								<span className='font-medium text-gray-600 dark:text-gray-300'>
									{reviews.items[activeDataIndex]?.author || 'A'}
								</span>
							</div>
							<div className='space-y-1 font-medium dark:text-white'>
								<p>
									{reviews.items[activeDataIndex].author} (
									<span>
										<b className='text-green-500'>
											{reviews.items[activeDataIndex].positiveRating}
										</b>{' '}
										/{' '}
										<b className='text-red-500'>{reviews.items[activeDataIndex].negativeRating}</b>
									</span>
									)
									<time
										dateTime={reviews.items[activeDataIndex].date}
										className='block text-sm text-gray-500 dark:text-gray-400'>
										{dayjs(new Date(reviews.items[activeDataIndex].date || ''))
											.locale('ru')
											.format('DD MMMM YYYY')}
									</time>
								</p>
							</div>
						</div>
						<div className='mb-1 flex items-center'>
							<h3
								className={`${
									(reviews.items[activeDataIndex].type === 'POSITIVE' && '!text-green-500') ||
									(reviews.items[activeDataIndex].type === 'NEGATIVE' && '!text-red-500') ||
									(reviews.items[activeDataIndex].type === 'NEUTRAL' && 'dark:text-white')
								} text-xl font-semibold text-gray-900`}>
								{reviews.items[activeDataIndex].title ||
									(reviews.items[activeDataIndex].description || 'Без названия').slice(0, 30) + '...'}
							</h3>
						</div>
						<p
							className='mb-2 text-gray-500 dark:text-gray-400'
							dangerouslySetInnerHTML={{
								__html: reviews.items[activeDataIndex].description || 'Без описания'
							}}
						/>
					</article>
				</div>
			</BottomPopup>
		</>
	)
}
