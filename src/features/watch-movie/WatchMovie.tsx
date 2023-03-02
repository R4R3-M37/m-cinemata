import { Link } from 'atomic-router-react'

export const WatchMovie = ({ id }: { id: string }) => {
	return (
		<Link to={`https://www.sspoisk.ru/film/${id}/`}>
			<button
				type='button'
				className='m-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 px-14 py-3 text-center text-sm font-bold text-white'>
				Смотреть
			</button>
		</Link>
	)
}
