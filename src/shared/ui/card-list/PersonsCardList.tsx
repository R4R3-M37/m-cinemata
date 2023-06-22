import { Link } from 'atomic-router-react'

import { PersonRoot } from '~/shared/api/types/person'
import { personRoute } from '~/shared/routing'
import { CardListSkeleton } from '~/shared/ui/card-list/ui/CardListSkeleton'
import { Image } from '~/shared/ui/Image'

interface Props {
	data?: PersonRoot[]
	loading: boolean
	title: string
}

export const PersonsCardList = ({ data, loading, title }: Props) => {
	if (!data || loading) return <CardListSkeleton />

	return (
		<>
			<div className='mt-4 flex items-center justify-between'>
				<b className='w-[250px] text-xl'>{title}</b>
			</div>
			<div className='flex overflow-auto'>
				<div className='flex items-center overflow-auto'>
					<div className='ml-2 flex items-start space-x-4 pt-4 pb-2'>
						{data.slice(0, 10).map(({ id, name, enName, photo, age }, i) => (
							<Link to={personRoute} params={{ id: String(id) }} className='flex' key={i}>
								<div className='dark:bg-primary relative w-[135px]'>
									<div className='relative'>
										<div className='absolute top-[10px] left-[-5px] rounded bg-white bg-d-secondary px-1.5 font-bold text-white dark:bg-white dark:text-black'>
											{age}
										</div>
										<Image className='h-[200px] rounded-sm' src={photo} loading='lazy' alt='' />
										<div className={`${name && name.length > 20 && 'text-sm'} font-semibold`}>
											{name}
										</div>
										<p
											className={`${
												enName && enName.length > 20 && 'text-sm'
											} font-light text-gray-500 dark:text-gray-400`}>
											{enName}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
