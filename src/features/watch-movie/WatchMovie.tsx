import { Link } from 'atomic-router-react'

interface Props {
	id: string
	ticketsOnSale: boolean
}

export const WatchMovie = ({ id, ticketsOnSale }: Props) => {
	const title = ticketsOnSale ? 'Смотреть в кино' : 'Смотреть'

	return (
		<Link to={`https://www.sspoisk.ru/film/${id}/`}>
			<button
				type='button'
				disabled={ticketsOnSale}
				className='disabled:from-orange-400 disabled:to-orange-500 disabled:cursor-not-allowed m-4 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 px-14 py-3 text-center text-sm font-bold text-white'>
				{title}
			</button>
		</Link>
	)
}
