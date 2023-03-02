import { RatingBlock } from '~/entities/movie/RatingBlock'

import * as Types from '~/shared/api/types/movies'

interface Props {
	ratingKp: number | string
	votes?: Types.Votes
	rating?: Types.Rating
}

export const Rating = ({ ratingKp, votes, rating }: Props) => {
	if (!votes || !rating) {
		return null
	}

	return (
		<section className='my-8'>
			<h2 className='mb-2 text-xl font-bold'>Рейтинг Кинопоиска</h2>
			{!!ratingKp && !!votes.kp && (
				<div className='flex flex-col items-center space-y-3 bg-gray-50 py-5 dark:bg-d-secondary'>
					<h2 className={`text-6xl font-black ${+ratingKp >= 7 ? 'text-green-500' : 'text-gray-500'}`}>
						{ratingKp}
					</h2>
					<p className='text-gray-500'>{votes.kp.toLocaleString() || 0} оценок</p>
				</div>
			)}
			<div className='mt-2 flex overflow-auto'>
				<div className='flex'>
					<div className='flex space-x-2'>
						{!!rating.imdb && !!votes.imdb && (
							<RatingBlock name='IMDb' rating={rating.imdb} votes={votes.imdb.toLocaleString()} />
						)}
						{!!rating.filmCritics && !!votes.filmCritics && (
							<RatingBlock
								name='Film Critics'
								rating={rating.filmCritics}
								votes={votes.filmCritics.toLocaleString()}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
