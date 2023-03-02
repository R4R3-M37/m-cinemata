import { ReactNode } from 'react'

import 'nprogress/nprogress.css'
import { BottomNavbar } from '~/widgets/bottom-navbar/BottomNavbar'
import { Navbar } from '~/widgets/navbar/Navbar'

import { ProgressBar } from '~/shared/ui/progress-bar/ProgressBar'

interface Props {
	children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
	return (
		<div className='dark:text-zinc-200'>
			<ProgressBar />
			<Navbar />
			<main className='container relative mx-auto px-4'>{children}</main>
			<div className='mb-24' />
			<BottomNavbar />
		</div>
	)
}
