import { Votes } from '~/shared/api/types/movies'
import { kFormatter } from '~/shared/lib/kFormatter'
import { movieLengthFormatter } from '~/shared/lib/movieLengthFormatter'

interface Props {
	ratingKp: number | string
	votes?: Votes
	top250?: number
	alternativeName?: string
	year?: number
	genres?: string
	country?: string
	movieLength?: number
	ageRating?: number
	seriesLength?: number
}

export const BasicInformation = (props: Props) => {
	const { ratingKp, votes, top250, alternativeName, year, genres, country, movieLength, ageRating, seriesLength } =
		props

	return (
		<>
			<div className='flex space-x-2'>
				<div className={`font-semibold ${Number(ratingKp) >= 7 ? 'text-green-500' : 'text-gray-500'}`}>
					{ratingKp}
				</div>
				<div className='text-gray-500'>{kFormatter(votes?.kp || 0)}</div>
				{top250 && (
					<div className='bg-gradient-to-br from-yellow-600 via-yellow-900 to-yellow-800 bg-clip-text font-bold text-transparent'>
						ТОП 250
					</div>
				)}
			</div>
			<div>{alternativeName}</div>
			<div className='text-gray-500'>
				{year}, {genres}
			</div>
			<div className='text-gray-500'>
				{country}
				{!!movieLength && `, ${movieLengthFormatter(movieLength)}`}
				{!!ageRating && `, ${ageRating}+`}
				{!!seriesLength && `, ${movieLengthFormatter(seriesLength)}`}
			</div>
		</>
	)
}
