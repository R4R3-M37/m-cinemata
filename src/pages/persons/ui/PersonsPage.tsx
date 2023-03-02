import { Combobox } from '@headlessui/react'
import { redirect } from 'atomic-router'
import { Link } from 'atomic-router-react'
import { createEffect, createEvent, sample } from 'effector'
import { useUnit } from 'effector-react'

import { FavoritesPersons } from '~/widgets/favorites-persons/ui/FavoritesPersons'
import { RecentPersons } from '~/widgets/recent-persons/RecentPersons'
import { SearchAutocomplete } from '~/widgets/search-autocomplete/SearchAutocomplete'

import { oldestPersonsQuery, personsByNameQuery, youngestPersonsQuery } from '~/shared/api/fetch'
import { useDocumentMeta } from '~/shared/lib/hooks/useDocumentMeta'
import { personRoute, personsBySearchRoute, personsRoute } from '~/shared/routing'
import { PersonsCardList } from '~/shared/ui/card-list/PersonsCardList'
import { Image } from '~/shared/ui/Image'
import { LoadingTemplate } from '~/shared/ui/LoadingTemplate'
import { PageTitle } from '~/shared/ui/PageTitle'

const pageChanged = createEvent<string>()

sample({
	clock: personsRoute.opened,
	target: createEffect(() => {
		youngestPersonsQuery.start({ page: 1 })
		oldestPersonsQuery.start({ page: 1 })
	})
})

redirect({
	route: personsBySearchRoute,
	clock: pageChanged,
	params: (payload) => ({ name: payload })
})

export const PersonsPage = () => {
	const youngestPersons = useUnit(youngestPersonsQuery.$data)
	const youngestPersonsLoading = useUnit(youngestPersonsQuery.$pending)

	const oldestPersons = useUnit(oldestPersonsQuery.$data)
	const oldestPersonsLoading = useUnit(oldestPersonsQuery.$pending)

	const personsAutocomplete = useUnit(personsByNameQuery.$data)?.docs?.map(({ name, age, id, photo, sex }) => ({
		name,
		id,
		photo,
		sex,
		age
	}))
	const loading = useUnit(personsByNameQuery.$pending)

	useDocumentMeta({ title: 'Cinemata | Актёры' })

	return (
		<>
			<PageTitle title='Актёры' color='' isUppercase={false} />
			<SearchAutocomplete onSubmitClick={pageChanged} fetch={personsByNameQuery.start}>
				{loading && <LoadingTemplate />}
				{!personsAutocomplete?.length && !loading ? (
					<div className='relative cursor-default select-none py-2 px-4 dark:text-white'>
						Ничего не найдено.
					</div>
				) : (
					!loading &&
					personsAutocomplete &&
					personsAutocomplete.map((person) => (
						<Link to={personRoute} params={{ id: String(person.id) }} key={person.id}>
							<Combobox.Option
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-5 pr-4 dark:text-white ${
										active ? 'font-bold' : 'font-medium'
									}`
								}
								value={person.name}>
								{({ selected }) => (
									<div className='relative flex'>
										{!!person.age && (
											<div className='absolute top-[5px] left-[-5px] rounded px-0.5 text-black bg-white'>
												<b>{person.age}</b>
											</div>
										)}
										<Image
											className='h-[100px] rounded-sm'
											src={person.photo}
											loading='lazy'
											alt=''
										/>
										<span
											className={`ml-2 block truncate ${
												selected ? 'font-semibold' : 'font-normal'
											}`}>
											{person.name}
											<p className='font-light dark:text-gray-300'>{person.sex}</p>
										</span>
									</div>
								)}
							</Combobox.Option>
						</Link>
					))
				)}
			</SearchAutocomplete>
			<FavoritesPersons />
			<PersonsCardList title='Молодые актёры' data={youngestPersons?.docs} loading={youngestPersonsLoading} />
			<RecentPersons />
			<PersonsCardList title='Старшие актёры' data={oldestPersons?.docs} loading={oldestPersonsLoading} />
		</>
	)
}
