import { useUnit } from 'effector-react'
import { useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { MovieBlockTitle } from '~/entities/movie/MovieBlockTitle'

import * as Types from '~/shared/api/types/movies'
import { BottomPopup } from '~/shared/ui/bottom-popup/BottomPopup'
import { createBottomPopupApi } from '~/shared/ui/bottom-popup/model'

const popup = createBottomPopupApi()

export const Facts = ({ facts }: { facts?: Types.Facts[] }) => {
	if (!facts || !facts[0]?.value) return null

	const { isActive, changed } = useUnit(popup)
	const [activeFact, setActiveFact] = useState<string>(facts[0].value)

	const handleOpenFact = (fact: Types.Facts) => {
		if (fact.value) {
			setActiveFact(fact.value)
			changed(true)
		}
	}

	return (
		<>
			<section className='my-8'>
				<MovieBlockTitle title='Знаете ли вы, что...' count={facts.length} />
				<div className='mt-4 flex'>
					<div className='flex items-center overflow-y-hidden'>
						<Swiper spaceBetween={25} slidesPerView={1}>
							{facts.map((fact, i) => (
								<SwiperSlide
									className='dark:bg-primary h-[150px] cursor-pointer bg-gray-50 p-5
										dark:bg-d-secondary'
									onClick={() => handleOpenFact(fact)}
									key={i}>
									<div
										dangerouslySetInnerHTML={{
											__html:
												Number(fact?.value?.length) > 100
													? fact?.value?.slice(0, 120) + '...'
													: fact.value || 'Пустой факт'
										}}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
			<BottomPopup isActive={isActive} changed={changed}>
				<div className='px-6'>
					<p
						className='h-[500px] overflow-y-auto pb-20 text-center text-base leading-relaxed text-gray-500 dark:text-gray-400 [&>.all]:underline'
						dangerouslySetInnerHTML={{ __html: activeFact }}></p>
				</div>
			</BottomPopup>
		</>
	)
}
