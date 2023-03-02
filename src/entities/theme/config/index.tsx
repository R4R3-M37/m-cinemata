import { BsFillMoonFill, FaSun } from '~/shared/icons'

export const availableThemes: { title: string; icon: JSX.Element }[] = [
	{ title: 'dark', icon: <BsFillMoonFill className='text-3xl' /> },
	{ title: 'light', icon: <FaSun className='text-3xl' /> }
]
