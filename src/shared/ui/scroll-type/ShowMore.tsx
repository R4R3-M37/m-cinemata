import { RouteInstance } from 'atomic-router'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'

import { BsFillArrowRightCircleFill } from '~/shared/icons'
import { LoadingTemplate } from '~/shared/ui/LoadingTemplate'
import { $scrollType } from '~/shared/ui/scroll-type/model'

interface Props {
	onClick?: () => void
	showButton?: boolean
	loading: boolean
	title?: string
	to?: RouteInstance<{ id: string }>
	id?: string
	className?: string
	showIcon?: boolean
}

export const ShowMore = (props: Props) => {
	const { onClick, showButton, loading, title = 'Показать ещё', className, to, id, showIcon } = props

	const scrollType = useUnit($scrollType)

	const handleInfinityScroll = () => {
		if (
			!showButton &&
			scrollType === 'infinity' &&
			onClick &&
			document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 1
		) {
			onClick()
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', handleInfinityScroll)
		return function () {
			document.removeEventListener('scroll', handleInfinityScroll)
		}
	}, [])

	if (scrollType === 'infinity' && !showButton) {
		return null
	}

	return (
		<>
			{to && id ? (
				<Link to={to} params={{ id }}>
					<button
						disabled={loading}
						className={`${
							className && className
						} flex flex-col items-center justify-center rounded-lg bg-zinc-200 dark:bg-d-secondary`}>
						{showIcon && (
							<BsFillArrowRightCircleFill className='h-[50px] w-[50px] text-gray-500 dark:text-white' />
						)}
						<b className='w-[105px]'>{title}</b>
					</button>
				</Link>
			) : (
				<button
					disabled={loading}
					onClick={onClick}
					className={`${
						className && className
					} flex flex-col items-center justify-center rounded-lg bg-zinc-200 dark:bg-d-secondary`}>
					{showIcon && (
						<BsFillArrowRightCircleFill className='h-[50px] w-[50px] text-gray-500 dark:text-white' />
					)}
					{loading ? <LoadingTemplate /> : <b className='w-[105px]'>{title}</b>}
				</button>
			)}
		</>
	)
}
