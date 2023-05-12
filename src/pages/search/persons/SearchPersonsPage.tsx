import { redirect } from 'atomic-router'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'

import { $data, pageChanged } from '~/pages/search/persons/model'

import { personsByNameQuery } from '~/shared/api/service'
import { notFoundRoute, personsBySearchRoute } from '~/shared/routing'
import { PersonCard } from '~/shared/ui/card/PersonCard'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'
import { ColSkeletonPageWithHeader } from '~/shared/ui/skeletons/ColSkeletonPageWithHeader'

export const SearchPersonsPage = () => {
	const { name } = useUnit(personsBySearchRoute.$params)

	const data = useUnit($data)
	const loading = useUnit(personsByNameQuery.$pending)

	const [page, setPage] = useState<number>(1)
	const changePage = useUnit(pageChanged)

	const handleChangePage = () => {
		setPage((prev) => prev + 1)
		changePage(page)
	}

	useEffect(() => {
		pageChanged(1)
	}, [])

	if (!data) redirect({ route: notFoundRoute })
	if (!data?.docs.length && loading) {
		return <ColSkeletonPageWithHeader />
	}

	return (
		<>
			<HeaderGoBack title={`Поиск (${decodeURI(name)})`} />
			<div className='container mx-auto px-5'>
				<div className='flex flex-col items-center space-x-5'>
					<section className='grid grid-cols-2 gap-4'>
						{data?.docs.map(({ id, age, name, enName, photo }) => (
							<PersonCard id={String(id)} age={age} photo={photo} name={name} enName={enName} key={id} />
						))}
						{page < (data?.pages || 1) && (
							<ShowMore
								loading={loading}
								onClick={handleChangePage}
								title='Показать ещё'
								className='flex h-[70px] w-[300px] flex-row items-center justify-center rounded-lg bg-d-secondary'
							/>
						)}
					</section>
				</div>
			</div>
		</>
	)
}
