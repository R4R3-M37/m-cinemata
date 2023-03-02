import { useUnit } from 'effector-react'

import { availableThemes } from '~/entities/theme/config'
import { $theme, themeChanged } from '~/entities/theme/model'

export const ThemeChanger = () => {
	const theme = useUnit($theme)
	const changed = useUnit(themeChanged)

	const handleChangeTheme = (theme: string) => {
		changed(theme)
	}

	return (
		<section className='container mx-auto pl-4'>
			<h2 className='pt-4 pb-2 text-xl font-bold'>Тема оформления</h2>
			<div className='flex flex-row space-x-4 overflow-auto'>
				<button
					onClick={() => handleChangeTheme('auto')}
					className={`${
						theme === 'auto' && 'border-[1px] border-orange-500'
					} flex h-[150px] w-[150px] flex-col justify-center rounded-lg bg-gray-50 p-4 dark:bg-d-secondary`}>
					<div className='text-lg'>Системная</div>
					<p className='text-sm text-gray-500'>Такая же, как на устройстве</p>
				</button>
				{availableThemes.map(({ icon, title }) => (
					<button
						className={`${
							theme === title && 'border-[1px] border-orange-500'
						} flex h-[150px] w-[100px] items-center justify-center rounded-lg bg-gray-50 p-4 dark:bg-d-secondary`}
						onClick={() => handleChangeTheme(title)}
						key={title}>
						{icon}
					</button>
				))}
			</div>
		</section>
	)
}
