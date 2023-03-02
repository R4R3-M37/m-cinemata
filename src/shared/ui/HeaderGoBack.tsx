import { Link, useRouter } from 'atomic-router-react'
import { useStore } from 'effector-react'

import { AiOutlineArrowLeft, BiSearchAlt2 } from '~/shared/icons'
import { searchRoute } from '~/shared/routing'

interface Props {
	title?: string
	redirectToSearch?: boolean
}

export const HeaderGoBack = ({ title, redirectToSearch }: Props) => {
	const { back } = useStore(useRouter().$history)

	if (redirectToSearch) {
		return (
			<nav className='container mx-auto flex flex-wrap items-center justify-between px-4 py-4 dark:bg-d-primary'>
				<button onClick={back} className='flex items-center'>
					<AiOutlineArrowLeft className='text-3xl' />
				</button>
				<div className='flex flex-row space-x-4'>
					<Link to={searchRoute}>
						<BiSearchAlt2 className='text-3xl' />
					</Link>
				</div>
			</nav>
		)
	}

	return (
		<header className='sticky top-0 z-50 flex h-14 items-center items-center justify-between bg-white dark:bg-d-primary'>
			<div className='flex items-center space-x-3 font-mono text-xl'>
				<button onClick={back}>
					<AiOutlineArrowLeft />
				</button>
				<h2 className='font-bold capitalize'>{title}</h2>
			</div>
		</header>
	)
}
