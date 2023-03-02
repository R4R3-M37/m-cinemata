import { useUnit } from 'effector-react'

import {
	$favoritesMovies,
	addedToFavoriteMovies,
	removedFromFavoriteMovies
} from '~/features/movie-add-to-favorite/model'

import { MovieOption } from '~/entities/movie/MovieOption'

import { BsFillBookmarkFill } from '~/shared/icons'
import { Alert } from '~/shared/ui/alerts/Alert'
import { createAlertsApi } from '~/shared/ui/alerts/model'

interface Props {
	id: string
	name: string
}

const alert = createAlertsApi()

export const AddToFavorite = ({ id, name }: Props) => {
	const { isActive, changed } = useUnit(alert)
	const favorites = useUnit($favoritesMovies)
	const isIncludes = favorites.includes(id)

	const handleAddToFavorite = () => {
		changed(true)
		if (isIncludes) {
			removedFromFavoriteMovies(String(id))
		} else {
			addedToFavoriteMovies(String(id))
		}
	}

	return (
		<>
			<MovieOption onClick={handleAddToFavorite}>
				<BsFillBookmarkFill
					className={`${isIncludes && 'fill-orange-500 transition-colors'} text-3xl transition-colors`}
				/>
				Буду смотреть
			</MovieOption>
			{isIncludes ? (
				<Alert isActive={isActive} changed={changed}>
					<span className='font-medium text-green-300'>
						Успешно добавлено - <b className='text-black dark:text-white'>{name}</b>
					</span>
				</Alert>
			) : (
				<Alert isActive={isActive} changed={changed}>
					<span className='font-medium text-red-300'>
						Успешно удалено - <b className='text-black dark:text-white'>{name}</b>
					</span>
				</Alert>
			)}
		</>
	)
}
