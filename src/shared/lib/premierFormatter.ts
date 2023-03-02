import dayjs from 'dayjs'

import { Premiere } from '~/shared/api/types/movies'

interface PremierFormatted extends Premiere {
	date: string
}

const countryFormat: { [key: string]: string } = {
	world: 'Мир',
	russia: 'Россия',
	cinema: 'Кинотеатр',
	dvd: 'DVD',
	bluray: 'BlueRay',
	digital: 'Цифровое',
	'': 'Кинопоиск'
}
const monthsFormat: { [key: string]: string } = {
	март: 'марта',
	август: 'августа'
}

export const premierFormatter = (premiere: Premiere): PremierFormatted[] => {
	const array = []

	for (const country in premiere) {
		if (!country || !premiere[country as keyof typeof premiere]) break
		if (country !== '_id' && country !== 'country') {
			const date = dayjs(new Date(premiere[country as keyof typeof premiere] || '')).locale('ru')

			const day = date.format('DD')
			const year = date.year()
			const month = monthsFormat[date.format('MMMM')]
				? monthsFormat[date.format('MMMM')]
				: date.format('MMMM').slice(0, date.format('MMMM').length - 1) + 'я'

			array.push({
				country: countryFormat[country],
				date: `${day} ${month} ${year}`
			})
		}
	}

	return array.sort((a, b) => +a.date.split(' ')[2] - +b.date.split(' ')[2])
}
