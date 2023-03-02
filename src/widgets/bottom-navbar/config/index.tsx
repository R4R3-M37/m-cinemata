import { NavbarLinksInterface } from '~/widgets/bottom-navbar/types'

import { BiSearchAlt2, BsBookmarkHeartFill, FiSettings, HiHome, IoPersonSharp } from '~/shared/icons'
import { homeRoute, myRoute, personsRoute, searchRoute, settingsRoute } from '~/shared/routing'

export const BottomNavbarLinks: NavbarLinksInterface[] = [
	{
		path: homeRoute,
		text: 'Главное',
		icon: <HiHome className='mb-1 inline-block h-1/2 w-1/2' />
	},
	{
		path: personsRoute,
		text: 'Актёры',
		icon: <IoPersonSharp className='mb-1 inline-block h-1/2 w-1/2' />
	},
	{
		path: myRoute,
		text: 'Моё',
		icon: <BsBookmarkHeartFill className='mb-1 inline-block h-1/2 w-1/2' />
	},
	{
		path: searchRoute,
		text: 'Поиск',
		icon: <BiSearchAlt2 className='mb-1 inline-block h-1/2 w-1/2' />
	},
	{
		path: settingsRoute,
		text: 'Настройки',
		icon: <FiSettings className='mb-1 inline-block h-1/2 w-1/2' />
	}
]
