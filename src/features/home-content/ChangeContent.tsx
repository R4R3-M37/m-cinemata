import { useUnit } from 'effector-react'

import { $activeContent, changedContent, contentList } from '~/features/home-content/model'

export const ChangeContent = () => {
	const activeContent = useUnit($activeContent)
	const changeContent = useUnit(changedContent)

	const handleChangeContentType = (title: string) => {
		changeContent(title)
	}

	return (
		<div className='w-full overflow-auto py-4'>
			<ul className='flex space-x-6'>
				{contentList.map((title, i) => (
					<li
						className={`${activeContent === title && 'border-b-2 border-b-orange-500'} text-xl`}
						onClick={() => handleChangeContentType(title)}
						key={i}>
						<button>
							<b>{title}</b>
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
