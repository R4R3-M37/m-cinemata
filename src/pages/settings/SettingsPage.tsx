import { ThemeChanger } from '~/entities/theme/ThemeChanger'

import { useDocumentMeta } from '~/shared/lib/hooks/useDocumentMeta'
import { PageTitle } from '~/shared/ui/PageTitle'
import { ScrollType } from '~/shared/ui/scroll-type/ScrollType'

export const SettingsPage = () => {
	useDocumentMeta({ title: 'Cinemata | Настройки' })

	return (
		<>
			<PageTitle title='Настройки' color='text-black dark:text-white' isUppercase={false} />
			<ThemeChanger />
			<ScrollType />
			<section className='container mx-auto pl-4'>
				<h2 className='pt-4 pb-2 text-xl font-bold'>Опасная зона</h2>
				<div className='flex h-[100px] w-full flex-row flex-row items-center justify-between rounded-lg border-2 border-red-500 bg-gray-50 p-4 dark:bg-d-secondary'>
					<div className='text-lg'>Удалить все данные?</div>
					<button
						type='button'
						onClick={() => {
							localStorage.clear()
							window.location.reload()
						}}
						className='h-[40px] w-[120px] rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-center text-sm font-medium text-white hover:bg-gradient-to-bl dark:focus:ring-blue-800'>
						Очистить
					</button>
				</div>
			</section>
		</>
	)
}
