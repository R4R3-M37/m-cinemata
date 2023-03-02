import { ReactNode } from 'react'

interface Props {
	children: ReactNode
	onClick?: () => void
}

export const MovieOption = ({ children, onClick }: Props) => {
	return (
		<div
			className='flex cursor-pointer flex-col items-center justify-between text-sm text-gray-500'
			onClick={onClick}>
			{children}
		</div>
	)
}
