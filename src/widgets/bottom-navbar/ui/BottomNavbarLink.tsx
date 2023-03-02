import { Link } from 'atomic-router-react'

import { NavbarLinksInterface } from '~/widgets/bottom-navbar/types'

export const BottomNavbarLink = ({ path, text, icon }: NavbarLinksInterface) => {
	return (
		<Link
			to={path}
			activeClassName='!text-orange-500 dark:!text-orange-500'
			className='inline-block w-full justify-center pt-2 pb-1 text-center text-black dark:text-white'>
			{icon}
			<span className='tab tab-account block text-xs'>{text}</span>
		</Link>
	)
}
