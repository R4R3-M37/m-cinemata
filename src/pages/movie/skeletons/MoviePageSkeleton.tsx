import { ImageBackground } from '~/entities/movie/ImageBackground'

import noPoster from '~/shared/assets/images/no-poster.png'
import { HeaderGoBack } from '~/shared/ui/HeaderGoBack'

export const MoviePageSkeleton = () => {
	return (
		<>
			<span className='sr-only'>Загрузка...</span>
			<HeaderGoBack redirectToSearch={true} />
			<ImageBackground src={noPoster} backdropImage={undefined} />
			<div className='relative z-50'>
				<div
					role='status'
					className='flex max-w-sm animate-pulse flex-col items-center justify-center text-center'>
					<div className='mt-8 mb-1 h-[100px] w-[250px] rounded-lg bg-gray-200 dark:bg-gray-700' />
					<div className='mb-1 h-[25px] w-[140px] rounded-lg bg-gray-200 dark:bg-gray-700' />
					<div className='mb-1 h-[25px] w-[240px] rounded-lg bg-gray-200 dark:bg-gray-700' />
					<div className='mb-2 h-[25px] w-[160px] rounded-lg bg-gray-200 dark:bg-gray-700' />
					<div className='mb-2 h-[45px] w-[170px] rounded-full bg-gray-200 dark:bg-gray-700' />
					<div className='mb-1 h-[25px] w-[350px] rounded-lg bg-gray-200 dark:bg-gray-700' />
					<div className='mb-1 h-[25px] w-[330px] rounded-lg bg-gray-200 dark:bg-gray-700' />
					<div className='h-[25px] w-[180px] rounded-lg bg-gray-200 dark:bg-gray-700' />
				</div>
			</div>
		</>
	)
}
