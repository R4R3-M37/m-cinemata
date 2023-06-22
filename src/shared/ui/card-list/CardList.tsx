import { Link } from 'atomic-router-react'

import { Movies } from '~/shared/api/types/movies'
import { PersonRoot } from '~/shared/api/types/person'
import { onlineCinemaRoute } from '~/shared/routing'
import { CardListSkeleton } from '~/shared/ui/card-list/ui/CardListSkeleton'
import { Card } from '~/shared/ui/card/Card'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'

interface Props {
	data?: Movies[] | PersonRoot[] | any
	loading: boolean
	title: string
	count?: number
	linkParams?: { type: string }
}

export const CardList = ({ data, loading, title, count, linkParams }: Props) => {
	if (!data || loading) return <CardListSkeleton />

	return (
		<>
			<div className='flex items-center justify-between'>
				<b className='w-[250px] text-xl'>{title}</b>
				{data.length >= 10 && !count && linkParams ? (
					<Link to={onlineCinemaRoute} params={linkParams}>
						<button className='text-lg font-bold text-orange-500'>Все</button>
					</Link>
				) : (
					<button className='text-lg font-bold text-orange-500'>{count}</button>
				)}
			</div>
			<div className='flex overflow-auto'>
				<div className='flex items-center overflow-auto'>
					<div className='ml-2 flex items-start space-x-4 pt-4 pb-2'>
						{data?.map((item, i) => (
							<Card
								className='w-[150px]'
								id={String(item.id)}
								rating={item?.rating}
								poster={item?.poster}
								name={item.name || ''}
								enName={item.enName || ''}
								alternativeName={item.alternativeName}
								key={i}
							/>
						))}
						{data.length >= 10 && linkParams && (
							<>
								<Link to={onlineCinemaRoute} params={linkParams}>
									<ShowMore
										loading={loading}
										showButton={true}
										showIcon={true}
										className='flex h-[200px] flex-col items-center justify-center rounded-lg bg-d-secondary'
									/>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
