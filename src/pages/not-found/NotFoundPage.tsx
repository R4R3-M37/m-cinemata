import { Link } from 'atomic-router-react'

import notFound from '~/shared/assets/images/not-found.svg'

export const NotFoundPage = () => {
	return (
		<section className='flex h-[600px] items-center dark:text-gray-100'>
			<div className='container mx-auto my-8 flex flex-col items-center justify-center px-5'>
				<div className='max-w-md text-center'>
					<div className='mb-8 text-9xl font-extrabold dark:text-gray-600'>
						<img src={notFound} alt='' />
					</div>
					<p className='text-2xl font-semibold md:text-3xl'>Страница не найдена</p>
					<p className='mt-4 mb-8 dark:text-gray-400'>
						Возможно, она была перемещена, или вы просто неверно указали адрес страницы.
					</p>
					<Link
						to='/'
						className='rounded bg-zinc-100 px-4 py-3 font-semibold dark:bg-violet-400 dark:text-white'>
						Перейти на главную
					</Link>
				</div>
			</div>
		</section>
	)
}
