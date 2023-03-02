import { Link } from 'atomic-router-react'

import * as Types from '~/shared/api/types/movies'
import { moviePersonsRoute } from '~/shared/routing'

export const PersonsPreview = ({ id, persons }: { id: string; persons?: Types.Persons[] }) => {
	if (!persons) return null

	return (
		<div className='px-5 pb-5 text-center text-black dark:text-gray-500'>
			В ролях:{' '}
			{persons
				.slice(0, 4)
				.map(({ name }) => name)
				.join(', ')}{' '}
			<Link to={moviePersonsRoute} params={{ id }} className='font-bold dark:text-white'>
				и другие
			</Link>
		</div>
	)
}
