import { CardSkeleton } from '~/shared/ui/card/ui/CardSkeleton'

export const CardListSkeleton = () => {
	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='h-2 h-[20px] w-[250px] rounded-sm bg-gray-200 dark:bg-gray-700' />
				<div className='h-2 h-[20px] w-[30px] rounded-sm bg-gray-200 dark:bg-gray-700' />
			</div>
			<div className='flex overflow-auto'>
				<div className='flex items-center overflow-auto'>
					<div className='ml-2 flex items-start space-x-4 pt-4 pb-2'>
						{Array.from({ length: 10 }).map((_, i) => (
							<CardSkeleton key={i} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
