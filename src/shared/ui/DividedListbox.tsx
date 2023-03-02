import { Listbox, Transition } from '@headlessui/react'
import classlite from 'classlite'
import { Fragment } from 'react'

import { Divider } from '~/shared/ui/Divider'

interface Props {
	onChange: (value: string) => void
	selections: string[] | number[]
	title: string
	value: string
}

export const DividedListbox = ({ onChange, selections, title, value }: Props) => {
	return (
		<Listbox value={value} onChange={onChange}>
			<div className='relative mt-1'>
				<Listbox.Button className='relative w-full'>
					<Divider className='text-lg capitalize' last='text-gray-500' title={title} value={value} />
				</Listbox.Button>
				<Transition
					as={Fragment}
					enter='transition ease-in duration-100'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<Listbox.Options className='z-100 text-capitalize absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-d-secondary py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
						{selections.map((value, index) => (
							<Listbox.Option
								className={({ active }) =>
									classlite(active ? 'bg-zinc-800' : '', 'relative py-2 pl-10 pr-4 text-white')
								}
								value={value}
								key={index}>
								{({ selected }) => (
									<>
										<span
											className={classlite(
												selected ? 'font-medium' : 'font-normal',
												'block truncate capitalize'
											)}>
											{value}
										</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	)
}
