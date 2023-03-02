import { Combobox, Transition } from '@headlessui/react'
import { Link } from 'atomic-router-react'
import { Fragment, ReactNode, useEffect, useState } from 'react'

import { CgOptions, SlMagnifier } from '~/shared/icons'
import { useDebounce } from '~/shared/lib/hooks/useDebounce'
import { searchFiltersRoute } from '~/shared/routing'

interface Props {
	isExtendedSettings?: boolean
	onSubmitClick: (query: string) => void
	fetch: ({ name, page }: { name: string; page: number }) => void
	children: ReactNode
}

export const SearchAutocomplete = ({ isExtendedSettings, onSubmitClick, fetch, children }: Props) => {
	const [selected, setSelected] = useState<string>('')

	const [query, setQuery] = useState<string>('')
	const queryDebounce = useDebounce(query, 300)

	useEffect(() => {
		if (queryDebounce && queryDebounce.length >= 3) {
			fetch({ name: queryDebounce, page: 1 })
		}
	}, [queryDebounce])

	return (
		<form className='my-4'>
			<Combobox value={selected} onChange={setSelected}>
				<div className='relative mt-1'>
					<div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
						{isExtendedSettings ? (
							<Link to={searchFiltersRoute} className='absolute inset-y-0 left-0 flex items-center pl-3'>
								<CgOptions className='h-5 w-5 text-gray-500 dark:text-gray-400' />
							</Link>
						) : (
							<div className='absolute inset-y-0 left-0 flex items-center pl-3'>
								<SlMagnifier className='h-5 w-5 text-gray-500 dark:text-gray-400' />
							</div>
						)}
						<Combobox.Input
							className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-d-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
							displayValue={({ name }) => name}
							placeholder='Поиск фильмов по названию...'
							onChange={(event) => setQuery(event.target.value)}
						/>
						<button
							onClick={() => onSubmitClick(queryDebounce)}
							type='submit'
							className='absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Поиск
						</button>
					</div>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setQuery('')}>
						<Combobox.Options className='mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-d-secondary sm:text-sm'>
							{children}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</form>
	)
}
