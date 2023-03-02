import { useStore } from 'effector-react'
import 'swiper/css'

import { MovieBlock } from '~/entities/movie/MovieBlock'

import { imagesByMovieIDQuery } from '~/shared/api/fetch'
import { movieImagesRoute } from '~/shared/routing'
import { Image } from '~/shared/ui/Image'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'

export const Images = ({ id }: { id: string }) => {
	const images = useStore(imagesByMovieIDQuery.$data)
	const loading = useStore(imagesByMovieIDQuery.$pending)

	const isMoreThan10 = images?.items && images.items?.length > 10
	const totalPages = images?.totalPages || 1

	if (loading || !images || !images?.total) {
		return null
	}

	return (
		<MovieBlock to={isMoreThan10 && movieImagesRoute} id={id} title='Изображения' count={images?.total}>
			{images?.items?.slice(0, 10).map(({ imageUrl }, i) => (
				<Image className='h-[200px]' src={imageUrl} alt='' key={i} />
			))}
			{isMoreThan10 ||
				(totalPages > 1 && (
					<ShowMore
						loading={loading}
						showButton={true}
						showIcon={true}
						to={movieImagesRoute}
						id={id}
						className='h-[200px]'
					/>
				))}
		</MovieBlock>
	)
}
