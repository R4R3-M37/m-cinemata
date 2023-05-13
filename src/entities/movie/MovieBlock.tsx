import { RouteInstance } from 'atomic-router'
import { ReactNode } from 'react'

import { MovieBlockTitle } from '~/entities/movie/MovieBlockTitle'

interface Props {
	children: ReactNode
	to?: RouteInstance<{ id: string }> | false | null
	id?: string
	title: string
	count: number
}

export const MovieBlock = ({ children, to, id, title, count }: Props) => {
	return (
		<section className='my-8'>
			<MovieBlockTitle to={to} id={id} title={title} count={count} />
			<div className='mt-4 flex overflow-auto'>
				<div className='flex items-center overflow-x-auto overflow-y-hidden'>
					<div className='flex space-x-4'>{children}</div>
				</div>
			</div>
		</section>
	)
}
