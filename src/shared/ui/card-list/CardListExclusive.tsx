import { RouteInstance } from 'atomic-router'
import { Link } from 'atomic-router-react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image } from '~/shared/ui/Image'

interface Props {
	data: { link: RouteInstance<{ genre: string }>; genre: string; image: string }[]
	title: string
}

export const CardListExclusive = ({ data, title }: Props) => {
	return (
		<div className='mt-4 mb-8'>
			<div className='flex items-center justify-between'>
				<b className='w-[250px] text-xl'>{title}</b>
			</div>
			<div className='flex overflow-auto'>
				<div className='flex items-center overflow-auto'>
					<Swiper className='flex space-x-5 pt-4 pb-2' spaceBetween={25} slidesPerView={1}>
						{data.map(({ link, genre, image }) => (
							<SwiperSlide key={genre}>
								<Link to={link} params={{ genre }} className='flex'>
									<div className='dark:bg-primary relative'>
										<div className='relative'>
											<Image
												className='h-[170px] w-[100vw] border-[1px] border-d-secondary'
												src={image}
												loading='lazy'
												alt=''
											/>
										</div>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
