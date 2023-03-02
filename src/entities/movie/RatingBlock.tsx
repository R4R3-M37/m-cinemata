interface Props {
	rating: number
	votes: number | string
	name: string
}

export const RatingBlock = ({ rating, votes, name }: Props) => {
	return (
		<div className='flex w-[250px] justify-center bg-gray-50 p-4 dark:bg-d-secondary'>
			<div className={`break-words pt-2 text-2xl font-black ${rating >= 7 ? 'text-green-500' : 'text-gray-500'}`}>
				{rating.toFixed(1)}
			</div>
			<div className='ml-4'>
				<div>Рейтинг {name}</div>
				<p className='text-gray-500'>{votes} оценок</p>
			</div>
		</div>
	)
}
