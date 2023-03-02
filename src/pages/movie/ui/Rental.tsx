import { MovieBlock } from '~/entities/movie/MovieBlock'

import { Premiere } from '~/shared/api/types/movies'
import { premierFormatter } from '~/shared/lib/premierFormatter'

interface Props {
	id: string
	premiere?: Premiere
}

export const Rental = ({ id, premiere }: Props) => {
	if (!premiere) return null
	if (!premierFormatter(premiere).length) return null

	return (
		<MovieBlock id={id} title='Прокат' count={premierFormatter(premiere).length}>
			{premierFormatter(premiere)?.map(({ country, date }) => (
				<div className='flex' key={country}>
					<div className='dark:bg-primary relative w-[250px] bg-gray-50 p-5 dark:bg-d-secondary'>
						<div className='relative'>
							<div className='font-semibold'>{date}</div>
							<p className='font-light text-gray-500'>Премьера ({country})</p>
						</div>
					</div>
				</div>
			))}
		</MovieBlock>
	)
}
