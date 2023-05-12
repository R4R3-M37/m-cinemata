import { Link } from 'atomic-router-react'

import { Poster, Rating } from '~/shared/api/types/movies'
import { movieRoute } from '~/shared/routing'
import { Image } from '~/shared/ui/Image'

interface Props {
	className?: string
	id: string
	rating?: Rating
	poster?: Poster
	name: string
	enName: string
	alternativeName: string
}

export const Card = ({ className, id, rating, poster, name, enName, alternativeName }: Props) => {
	const classNameWidth = className?.split(' ').find((className) => className.includes('w'))

	const altName = enName || alternativeName || ''
	const ratingKp = (rating?.kp || rating?.imdb)?.toFixed(1)

	return (
		<Link to={movieRoute} params={{ id }} className={`${className} flex`}>
			<div className={`dark:bg-primary relative ${classNameWidth ? classNameWidth : 'w-[135px]'} `}>
				<div className='relative'>
					{ratingKp && (
						<div
							className={`${
								+ratingKp >= 7 ? 'bg-emerald-700' : 'bg-gray-700'
							} absolute top-[10px] left-[-5px] rounded px-1.5 text-white`}>
							<b>{ratingKp}</b>
						</div>
					)}
					<Image className='h-[200px] rounded-sm' src={poster?.url} loading='lazy' alt='' />
					<div className={`font-semibold ${name.length > 20 && 'text-sm'}`}>{name}</div>
					<p className={`${altName.length > 20 && 'text-sm'} font-light text-gray-500 dark:text-gray-400`}>
						{altName}
					</p>
				</div>
			</div>
		</Link>
	)
}
