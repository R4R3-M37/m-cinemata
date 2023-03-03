import { FavoritesMovies } from '~/widgets/favorites-movies/FavoritesMovies'
import { FavoritesPersons } from '~/widgets/favorites-persons/FavoritesPersons'
import { RecentMovies } from '~/widgets/recent-movies/RecentMovies'
import { RecentPersons } from '~/widgets/recent-persons/RecentPersons'

import { useDocumentMeta } from '~/shared/lib/hooks/useDocumentMeta'
import { PageTitle } from '~/shared/ui/PageTitle'

export const MyPage = () => {
	useDocumentMeta({ title: 'Cinemata | Избранное' })

	return (
		<>
			<PageTitle title='Моё' color='' isUppercase={false} />
			<div className='pl-2 pt-8'>
				<FavoritesMovies />
				<RecentMovies />
				<FavoritesPersons />
				<RecentPersons />
			</div>
		</>
	)
}
