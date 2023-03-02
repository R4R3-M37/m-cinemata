import { CardSkeleton } from '~/shared/ui/card/ui/CardSkeleton'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'

export const ColSkeletonPageWithHeader = () => {
	return (
		<>
			<HeaderGoBack title='Загрузка...' />
			<div className='container mx-auto px-5'>
				<div className='flex flex-col items-center space-x-5'>
					<section className='grid grid-cols-2 gap-4'>
						{Array.from({ length: 10 }).map((_, i) => (
							<CardSkeleton key={i} />
						))}
					</section>
				</div>
			</div>
		</>
	)
}
