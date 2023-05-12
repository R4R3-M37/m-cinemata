import { RouteParamsAndQuery } from 'atomic-router'
import { Link } from 'atomic-router-react'
import dayjs from 'dayjs'
import { createEffect, sample } from 'effector'
import { useUnit } from 'effector-react'

import { Facts } from '~/widgets/facts/Facts'
import { addedToRecent } from '~/widgets/recent-persons/model'

import { PersonAddToFavorite } from '~/features/person-add-to-favorite/PersonAddToFavorite'

import { MovieBlock } from '~/entities/movie/MovieBlock'

import { personByIDQuery } from '~/shared/api/service'
import { IoIosArrowForward } from '~/shared/icons'
import { useDocumentMeta } from '~/shared/lib/hooks/useDocumentMeta'
import { movieRoute, personRoute } from '~/shared/routing'
import { BottomPopup } from '~/shared/ui/bottom-popup/BottomPopup'
import { createBottomPopupApi } from '~/shared/ui/bottom-popup/model'
import { Divider } from '~/shared/ui/Divider'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'
import { Image } from '~/shared/ui/Image'

sample({
	clock: personRoute.opened,
	target: createEffect(({ params }: RouteParamsAndQuery<{ id: string }>) => {
		personByIDQuery.start({ id: params.id })
	})
})

const popup = createBottomPopupApi()

export const PersonPage = () => {
	const { id } = useUnit(personRoute.$params)
	const { isActive, changed } = useUnit(popup)

	const person = useUnit(personByIDQuery.$data)
	const loading = useUnit(personByIDQuery.$pending)

	const name = person?.name || person?.enName || ''
	const profession = (person?.profession && person.profession[0]?.value) || ''
	const birthday = (person?.birthday && dayjs(new Date(person.birthday)).locale('ru').format('DD MMMM YYYY')) || ''
	const death = (person?.death && dayjs(new Date(person.death)).locale('ru').format('DD MMMM YYYY')) || ''
	const age = person?.age && `${person.age} года`
	const growth = person?.growth && (+person.growth / 100).toFixed(2)

	useDocumentMeta({
		title: `Cinemata | ${name} ${!!age && `(${age})`}`,
		description: profession,
		image: person?.photo
	})

	if (loading || !person) {
		return null
	} else {
		addedToRecent(id)
	}

	return (
		<>
			<HeaderGoBack redirectToSearch={true} />
			<div>
				<div className='flex justify-between'>
					<div>
						<Image className='h-[200px] w-[135px]' src={person?.photo} alt='' />
					</div>
					<div>
						<h1 className='max-w-[190px] overflow-auto text-2xl font-bold'>{person?.name}</h1>
						<p className='my-2'>{person?.enName}</p>
						<div className='text-gray-500'>
							<div>{profession}</div>
							<div>{birthday}</div>
							<div>
								{!!age && age}
								{!!age && !!growth && ` • ${growth} м`}
							</div>
							<button onClick={() => changed(true)} className='my-2 flex items-center text-orange-500'>
								Подробнее <IoIosArrowForward className='text-2xl' />
							</button>
						</div>
					</div>
				</div>
				{person?.facts && person.facts.length > 1 && <Facts facts={person.facts} />}
				{!!person?.movies?.length && (
					<MovieBlock title='Связанные фильмы' count={person?.movies.length}>
						{person?.movies.map(({ id, name, rating, description }, i) => (
							<Link
								to={movieRoute}
								params={{ id: String(id) }}
								className='ml-1 flex'
								key={`${name}_${description}_${id}_${i}`}>
								<div className='dark:bg-primary relative w-[135px]'>
									<div className='relative'>
										{rating && (
											<div
												className={`${
													rating >= 7 ? 'bg-emerald-700' : 'bg-gray-700'
												} absolute top-[10px] left-[-5px] rounded px-1.5 text-white`}>
												<b>{rating.toFixed(1)}</b>
											</div>
										)}
										<Image className='h-[200px] rounded-sm' src={''} loading='lazy' alt='' />
										<div className={`font-semibold ${name && name.length > 20 && 'text-sm'}`}>
											{name}
										</div>
										<p
											className={`${
												description && description.length > 20 && 'text-sm'
											} font-light capitalize text-gray-500 dark:text-gray-400`}>
											{description}
										</p>
									</div>
								</div>
							</Link>
						))}
					</MovieBlock>
				)}
			</div>
			<BottomPopup isActive={isActive} changed={changed}>
				<div className='flex flex-col space-y-2 px-6 pb-48'>
					<Divider
						first='capitalize text-gray-500'
						title='Карьера'
						value={person?.profession?.map(({ value }) => value).join(', ')}
					/>
					<Divider
						first='capitalize text-gray-500'
						title='Рост'
						value={person?.growth && `${person.growth} см`}
					/>
					<Divider first='capitalize text-gray-500' title='Дата рождения' value={birthday} />
					<Divider
						first='capitalize text-gray-500'
						title='Место рождения'
						value={person?.birthPlace?.map(({ value }) => value).join(', ')}
					/>
					<Divider first='capitalize text-gray-500' title='Дата смерти' value={death} />
					<Divider
						first='capitalize text-gray-500'
						title='Место смерти'
						value={person?.deathPlace?.map(({ value }) => value).join(', ')}
					/>
					<Divider first='capitalize text-gray-500' title='Пол' value={person?.sex} />
					<Divider first='capitalize text-gray-500' title='Количество наград' value={person?.countAwards} />
					<Divider first='capitalize text-gray-500' title='Всего фильмов' value={person?.movies?.length} />
					<PersonAddToFavorite id={id} name={name || ''} />
				</div>
			</BottomPopup>
		</>
	)
}
