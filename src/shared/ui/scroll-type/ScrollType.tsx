import { useUnit } from 'effector-react'

import { availableScrollTypes } from '~/shared/ui/scroll-type/config'
import { $scrollType, scrollTypeChanged } from '~/shared/ui/scroll-type/model'

export const ScrollType = () => {
	const scrollType = useUnit($scrollType)
	const changed = useUnit(scrollTypeChanged)

	return (
		<section className='container mx-auto pl-4'>
			<h2 className='pt-4 pb-2 text-xl font-bold'>Способ прокрутки</h2>
			<div className='flex flex-row space-x-4 overflow-auto'>
				{availableScrollTypes.map(({ title, description, type }) => (
					<div
						className={`${
							scrollType === type && 'border-[1px] border-orange-500'
						} flex h-[150px] w-[150px] flex-col justify-center rounded-lg bg-gray-50 p-4 text-center dark:bg-d-secondary`}
						onClick={() => changed(type)}
						key={type}>
						<div className='text-lg'>{title}</div>
						<p className='text-sm text-gray-500'>{description}</p>
					</div>
				))}
			</div>
		</section>
	)
}
