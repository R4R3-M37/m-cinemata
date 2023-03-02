import { Link } from 'atomic-router-react'

import { MovieBlock } from '~/entities/movie/MovieBlock'

import * as Types from '~/shared/api/types/movies'
import noPoster from '~/shared/assets/images/no-poster.png'
import { movieRoute, movieSequelsPrequelsRoute } from '~/shared/routing'
import { Image } from '~/shared/ui/Image'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'

interface Props {
	sequelsAndPrequels?: Types.SequelsAndPrequel[]
	id?: string
}

export const SequelsAndPrequels = ({ sequelsAndPrequels, id }: Props) => {
	if (!sequelsAndPrequels || sequelsAndPrequels.length < 1) {
		return null
	}

	return (
		<>
			<MovieBlock
				to={sequelsAndPrequels.length > 10 && movieSequelsPrequelsRoute}
				id={id}
				title='Связанные фильмы'
				count={sequelsAndPrequels.length}>
				{sequelsAndPrequels.slice(0, 10).map(({ id, poster, name, enName, alternativeName }, i) => (
					<Link to={movieRoute} params={{ id: String(id) }} className='flex' key={i}>
						<div className='dark:bg-primary relative w-[130px]'>
							<div className='relative'>
								<Image src={poster?.url || noPoster} loading='lazy' alt='' />
								<div className={`font-semibold ${Number(name?.length) > 20 && 'text-sm'}`}>
									{name || enName || alternativeName}
								</div>
							</div>
						</div>
					</Link>
				))}
				{sequelsAndPrequels.length > 10 && (
					<ShowMore
						loading={false}
						showButton={true}
						showIcon={true}
						to={movieSequelsPrequelsRoute}
						id={id}
						className='h-[200px]'
					/>
				)}
			</MovieBlock>
		</>
	)
}
