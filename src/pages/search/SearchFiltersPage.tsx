import { Tab } from '@headlessui/react'
import { Link } from 'atomic-router-react'
import classlite from 'classlite'
import { useState } from 'react'

import { onlineCinemaRoute } from '~/shared/routing'
import { DividedListbox } from '~/shared/ui/DividedListbox'
import { Divider } from '~/shared/ui/Divider'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { MultiRangeSlider } from '~/shared/ui/multi-range-slider/MultiRangeSlider'

type FormType = {
	category: string
	genre: string
	year: string
	sortBy: string
	ratingMin: number
	ratingMax: number
}

const categories: string[] = ['Все', 'Фильмы', 'Сериалы', 'Аниме', 'Мультфильмы']
const genres: string[] = [
	'комедия',
	'детский',
	'детектив',
	'аниме',
	'приключения',
	'боевик',
	'драма',
	'криминал',
	'музыка',
	'семейный',
	'мелодрама',
	'триллер',
	'фантастика',
	'ужасы',
	'фэнтези',
	'вестерн',
	'спорт'
]
const years: string[] = Array.from({ length: 40 }).map((_, i) => `${new Date().getFullYear() - i}`)
const sortBy: string[] = ['Рейтингу', 'Популярности', 'Дате']

const formInitialState: FormType = {
	category: categories[0],
	genre: 'Любой',
	year: 'Любой',
	sortBy: sortBy[0],
	ratingMin: 0,
	ratingMax: 10
}

export const SearchFiltersPage = () => {
	const [form, setForm] = useState<FormType>(formInitialState)

	return (
		<>
			<HeaderGoBack title='Поиск фильмов' />
			<div className='w-full max-w-md p-1'>
				<Tab.Group
					onChange={(categoryID) => setForm((prev) => ({ ...prev, category: categories[categoryID] }))}>
					<Tab.List className='flex space-x-5 overflow-x-auto'>
						{categories.map((category) => (
							<Tab
								className={({ selected }) =>
									classlite(
										'focus:outline-none text-lg',
										selected
											? 'shadow border-t-2 font-semibold'
											: 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
									)
								}
								key={category}>
								{category}
							</Tab>
						))}
					</Tab.List>
				</Tab.Group>
				<hr className='my-3 -mx-4 h-px border-0 bg-gray-200 dark:bg-d-secondary' />
				<form className='flex space-y-4 flex-col'>
					<DividedListbox
						onChange={(genre: string) => setForm((prev) => ({ ...prev, genre }))}
						selections={genres}
						title='Жанр'
						value={form.genre}
					/>
					<hr className='my-3 -mx-4 h-px border-0 bg-gray-200 dark:bg-d-secondary' />
					<DividedListbox
						onChange={(year: string) => setForm((prev) => ({ ...prev, year }))}
						selections={years}
						title='Год'
						value={form.year}
					/>
				</form>
				<hr className='my-3 -mx-4 h-px border-0 bg-gray-200 dark:bg-d-secondary' />
				<span className='text-gray-500'>Сортировать по:</span>
				<Tab.Group onChange={(sortByID) => setForm((prev) => ({ ...prev, sortBy: sortBy[sortByID] }))}>
					<Tab.List className='mt-4 flex justify-between overflow-x-auto w-full'>
						{sortBy.map((sort) => (
							<Tab
								className={({ selected }) =>
									classlite(
										'focus:outline-none text-lg',
										selected
											? 'shadow border-t-2 font-semibold'
											: 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
									)
								}
								key={sort}>
								{sort}
							</Tab>
						))}
					</Tab.List>
				</Tab.Group>
				<div className='mt-5'>
					<Divider
						className='text-xl'
						last='text-gray-500'
						title='Рейтинг'
						value={`от ${form.ratingMin} до ${form.ratingMax}`}
					/>
					<MultiRangeSlider
						className='mt-5'
						min={0}
						max={10}
						onChange={({ min, max }) => {
							setForm((prev) => ({
								...prev,
								ratingMin: min,
								ratingMax: max
							}))
						}}
					/>
				</div>
				<Link
					to={onlineCinemaRoute}
					params={{ type: 'movie' }}
					query={{
						category: form.category,
						genre: form.genre,
						year: form.year,
						rating: `${form.ratingMin}-${form.ratingMax}`,
						sortBy: form.sortBy
					}}
					className='fixed bottom-20 flex w-[90%] cursor-pointer justify-center rounded-2xl bg-gradient-to-r from-orange-700 via-orange-600 to-orange-800 p-5 text-lg text-white'>
					<h2 className='font-bold text-xl'>Показать</h2>
				</Link>
			</div>
		</>
	)
}
