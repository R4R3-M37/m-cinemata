import { sample } from 'effector'
import { useUnit } from 'effector-react'

import { fetchMoviesFx } from '~/pages/home/api'
import { Collections } from '~/pages/home/ui/Collections'
import { MyMovies } from '~/pages/home/ui/MyMovies'

import { ChangeContent } from '~/features/home-content/ChangeContent'
import { $activeContent } from '~/features/home-content/model'

import { useDocumentMeta } from '~/shared/lib/hooks/useDocumentMeta'
import { homeRoute } from '~/shared/routing'
import { PageTitle } from '~/shared/ui/PageTitle'

sample({
	clock: [homeRoute.opened, $activeContent],
	source: $activeContent,
	target: fetchMoviesFx
})

export const HomePage = () => {
	const activeContent = useUnit($activeContent)

	useDocumentMeta({ title: 'Cinemata | Главное' })

	return (
		<>
			<PageTitle title='Cinemata' color='text-orange-500' isUppercase={true} />
			<ChangeContent />
			{activeContent === 'Моё кино' && <MyMovies />}
			{activeContent === 'Подборки' && <Collections />}
		</>
	)
}
