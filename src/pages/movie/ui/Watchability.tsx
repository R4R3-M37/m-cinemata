import { Link } from 'atomic-router-react'

import { MovieBlock } from '~/entities/movie/MovieBlock'

import { WatchabilityItem } from '~/shared/api/types/movies'

interface Props {
	watchability?: WatchabilityItem[]
}

export const Watchability = ({ watchability }: Props) => {
	if (!watchability) return null

	return (
		<MovieBlock title='Смотреть на других площадках' count={watchability.length}>
			{watchability.map(({ name, logo, url }) => (
				<Link to={url || window.location.href} className='flex' key={name}>
					<div className='dark:bg-primary relative flex w-[250px] items-center bg-gray-50 p-5 dark:bg-d-secondary'>
						<img src={logo?.url} className='w-[50px]' alt='' />
						<div className='pl-5 font-semibold'>{name}</div>
					</div>
				</Link>
			))}
		</MovieBlock>
	)
}
