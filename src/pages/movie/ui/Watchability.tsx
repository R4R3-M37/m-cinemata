import { Link } from 'atomic-router-react'

import { MovieBlock } from '~/entities/movie/MovieBlock'

import { WatchabilityItems } from '~/shared/api/types/movies'

interface Props {
	watchability?: WatchabilityItems[]
}

export const Watchability = ({ watchability }: Props) => {
	if (!watchability) return null

	return (
		<MovieBlock title='Смотреть на других площадках' count={watchability.length}>
			{watchability.map(({ name, logo, url }) => (
				<Link to={url} className='flex' key={name}>
					<div className='flex items-center dark:bg-primary relative w-[250px] bg-gray-50 p-5 dark:bg-d-secondary'>
						<img src={logo.url} className='w-[50px]' alt='' />
						<div className='font-semibold pl-5'>{name}</div>
					</div>
				</Link>
			))}
		</MovieBlock>
	)
}
