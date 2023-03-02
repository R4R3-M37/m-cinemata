import { Link, useRouter } from 'atomic-router-react'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'

import onBigScreen from '~/shared/assets/images/on-big-screen.png'
import { BiCast } from '~/shared/icons'
import { ROUTES_TITLE } from '~/shared/routing'
import { BottomPopup } from '~/shared/ui/bottom-popup/BottomPopup'
import { createBottomPopupApi } from '~/shared/ui/bottom-popup/model'
import { Image } from '~/shared/ui/Image'

const popup = createBottomPopupApi()

export const Navbar = () => {
	const { isActive, changed } = useUnit(popup)
	const [isShow, setIsShow] = useState<boolean>(false)
	const path: string = useUnit(useRouter().$path)

	const handleOpenPopup = () => {
		changed(true)
	}

	const autoShowNavbarTitle = () => {
		if (window.scrollY <= 30) {
			setIsShow(false)
		} else {
			setIsShow(true)
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', autoShowNavbarTitle)
		return () => document.removeEventListener('scroll', autoShowNavbarTitle)
	}, [])

	if (!ROUTES_TITLE[path]) {
		return null
	}

	return (
		<>
			<header className='opacity-1 sticky top-0 z-50 flex h-14 h-14 items-center items-center justify-between bg-white px-5 dark:bg-d-primary'>
				<h1
					onClick={() => window.scrollTo(0, 0)}
					className={
						isShow
							? 'text-bold opacity-1 text-xl text-black transition-all dark:text-white'
							: 'text-bold text-xl opacity-0 transition-all'
					}>
					{ROUTES_TITLE[path]}
				</h1>
				<button onClick={handleOpenPopup}>
					<BiCast className='text-2xl' />
				</button>
			</header>
			<BottomPopup isActive={isActive} changed={changed}>
				<div className='px-6'>
					<Image src={onBigScreen} alt='' />
					<h2 className='pt-6 text-center text-2xl text-gray-500 dark:text-gray-400'>
						<b>Смотрите на большом экране</b>
					</h2>
					<p className='text-center text-base leading-relaxed text-gray-500 dark:text-gray-400'>
						На телевизоре и на других приставках
					</p>
				</div>
				<div className='flex justify-center space-x-2 rounded-b pt-6 pb-12'>
					<Link to='https://www.kinopoisk.ru/special/smarttv_instruction/'>
						<button
							type='button'
							className='rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-d-primary dark:hover:bg-d-secondary'>
							<b className='text-sm'>Узнать больше</b>
						</button>
					</Link>
				</div>
			</BottomPopup>
		</>
	)
}
