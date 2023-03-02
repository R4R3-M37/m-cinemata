import { useUnit } from 'effector-react'

import {
	$favoritesPersons,
	addedToFavoritePersons,
	removedFromFavoritePersons
} from '~/features/person-add-to-favorite/model'

import { BsFillBookmarkFill } from '~/shared/icons'
import { Alert } from '~/shared/ui/alerts/Alert'
import { createAlertsApi } from '~/shared/ui/alerts/model'

interface Props {
	id: string
	name: string
}

const alert = createAlertsApi()

export const PersonAddToFavorite = ({ id, name }: Props) => {
	const { isActive, changed } = useUnit(alert)
	const favorites = useUnit($favoritesPersons)
	const isIncludes = favorites.includes(id)

	const handleAddToFavorite = () => {
		changed(true)
		if (isIncludes) {
			removedFromFavoritePersons(id)
		} else {
			addedToFavoritePersons(id)
		}
	}

	return (
		<>
			<button
				className='mt-12 flex w-full cursor-pointer justify-between rounded-2xl bg-d-primary p-5 text-lg font-bold text-white'
				onClick={handleAddToFavorite}>
				<h2 className='font-bold'>Добавить в избранное</h2>
				<BsFillBookmarkFill
					className={`${isIncludes && 'fill-orange-500 transition-colors'} text-3xl transition-colors`}
				/>
			</button>
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
