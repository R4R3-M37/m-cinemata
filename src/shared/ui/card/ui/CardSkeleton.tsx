import { Image } from '~/shared/ui/Image'

export const CardSkeleton = () => {
	return (
		<div className='flex'>
			<div className='dark:bg-primary relative w-[135px]'>
				<div className='relative'>
					<Image className='h-[200px] w-[135px] rounded-sm' src='' loading='lazy' alt='' />
					<div className='my-2 h-2 h-[15px] w-[100px] rounded-sm bg-gray-400 dark:bg-gray-700' />
					<div className='mb-2.5 h-2 h-[15px] w-[120px] rounded-sm bg-gray-400 dark:bg-gray-700' />
				</div>
			</div>
		</div>
	)
}
