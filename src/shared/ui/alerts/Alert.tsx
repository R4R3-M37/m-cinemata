import { Transition } from '@headlessui/react'
import { ReactNode, useEffect } from 'react'
import { Portal } from 'react-portal'

interface Props {
	children: ReactNode
	isActive: boolean
	changed: (isActive: boolean) => void
}

export const Alert = ({ children, isActive, changed }: Props) => {
	useEffect(() => {
		if (isActive) {
			setTimeout(() => {
				changed(false)
			}, 1500)
		}
	}, [isActive])

	return (
		<Portal>
			<Transition
				show={isActive}
				enter='transition-opacity duration-100'
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leave='transition-opacity duration-100'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'>
				<div
					className='z-100 fixed left-1/2 bottom-20 w-80 -translate-x-1/2 transform rounded-lg bg-gray-50 p-4 text-sm dark:bg-d-secondary'
					role='alert'>
					{children}
				</div>
			</Transition>
		</Portal>
	)
}
