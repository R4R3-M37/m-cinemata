import { RouteInstance } from 'atomic-router'
import { Link } from 'atomic-router-react'

import { IoIosArrowForward } from '~/shared/icons'

interface Props {
	to?: RouteInstance<{ id: string }> | false | null
	id?: string
	title: string
	count: number
}

export const MovieBlockTitle = ({ to, id, title, count }: Props) => {
	return (
		<div className='flex items-center justify-between'>
			<h2 className='text-xl font-bold'>{title}</h2>
			{to && id ? (
				<Link to={to} params={{ id }}>
					<button className='flex items-center text-lg font-bold text-orange-500'>
						{count}
						<IoIosArrowForward className='text-2xl' />
					</button>
				</Link>
			) : (
				<div className='flex cursor-auto items-center text-lg font-bold text-orange-500'>{count}</div>
			)}
		</div>
	)
}
