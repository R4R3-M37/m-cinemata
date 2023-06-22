import { Link } from 'atomic-router-react'

import { MovieBlock } from '~/entities/movie/MovieBlock'

import * as Types from '~/shared/api/types/movies'
import { movieRoute, movieSimilarRoute } from '~/shared/routing'
import { Image } from '~/shared/ui/Image'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'

interface Props {
	similarMovies?: Types.LinkedMovie[]
	id: string
}

export const SimilarMovies = ({ similarMovies, id }: Props) => {
	if (!similarMovies || similarMovies.length < 1) {
		return null
	}

	return (
		<MovieBlock
			to={similarMovies.length > 10 && movieSimilarRoute}
			id={id}
			title='Похожие фильмы'
			count={similarMovies.length}>
			{similarMovies.map(({ id, poster, name, enName, alternativeName }, i) => (
				<div className='flex' key={i}>
					<div className='dark:bg-primary relative w-[130px]'>
						<Link to={movieRoute} params={{ id: String(id) }}>
							<Image src={poster?.url} loading='lazy' alt='' />
							<div className={`font-semibold ${Number(name?.length) > 20 && 'text-sm'}`}>
								{name || enName || alternativeName}
							</div>
						</Link>
					</div>
				</div>
			))}
			{similarMovies.length > 10 && (
				<ShowMore
					loading={false}
					showButton={true}
					showIcon={true}
					to={movieSimilarRoute}
					id={id}
					className='h-[200px]'
				/>
			)}
		</MovieBlock>
	)
}
