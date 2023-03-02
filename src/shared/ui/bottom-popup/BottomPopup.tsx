import { Transition } from '@headlessui/react'
import { ReactNode } from 'react'
import { Portal } from 'react-portal'
import { useSwipeable } from 'react-swipeable'

import { AiOutlineCloseCircle, HiOutlineMinus } from '~/shared/icons'

interface Props {
	swipeable?: boolean
	swipeDelta?: number
	isActive: boolean
	changed: (popup: boolean) => void
	children: ReactNode
}

export const BottomPopup = ({ swipeable, swipeDelta = 50, isActive, changed, children }: Props) => {
	const handlers =
		swipeable &&
		useSwipeable({
			onSwipedDown: () => changed(!isActive),
			delta: swipeDelta
		})

	return (
		<Portal>
			<Transition
				show={isActive}
				enter='transition-all duration-150'
				enterFrom='will-change-transform translate-y-full fixed bottom-0 -z-100 w-full overflow-y-auto overflow-x-hidden'
				enterTo='will-change-transform translate-y-0 fixed bottom-0 z-100 w-full overflow-y-auto overflow-x-hidden'
				leave='transition-all duration-150'
				leaveFrom='will-change-transform translate-y-0 fixed bottom-0 z-100 w-full overflow-y-auto overflow-x-hidden'
				leaveTo='will-change-transform translate-y-full fixed bottom-0 -z-100 w-full overflow-y-auto overflow-x-hidden'>
				<div {...handlers}>
					<div className='relative h-full w-full max-w-2xl'>
						<div className='relative rounded-t-2xl bg-white shadow dark:bg-d-secondary'>
							<div className='absolute left-1/2 -translate-x-1/2 transform '>
								<HiOutlineMinus className='text-4xl' />
							</div>
							<div className='flex items-start justify-between p-4'>
								<button
									onClick={() => changed(false)}
									type='button'
									className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'>
									<AiOutlineCloseCircle className='text-3xl' />
									<span className='sr-only'>Close popup</span>
								</button>
							</div>
							{children}
						</div>
					</div>
				</div>
			</Transition>
			{isActive && (
				<div
					onClick={() => changed(false)}
					className={
						isActive
							? 'pointer-events-none pointer-events-auto fixed inset-0 z-50 cursor-default bg-black opacity-50 transition-opacity lg:hidden'
							: 'pointer-events-none fixed inset-0 z-20 cursor-default bg-black opacity-0 transition-opacity peer-target:pointer-events-auto peer-target:opacity-50 lg:hidden'
					}
				/>
			)}
		</Portal>
	)
}
