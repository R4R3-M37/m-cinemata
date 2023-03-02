export const baseUrl = 'https://api.kinopoisk.dev'
export const token = '&token=97CT04G-7VT48YR-G0FYQ1R-BF92T79'

export const currentYear = new Date().getFullYear()

export const categoryFormatter: { [key: string]: string } = {
	Все: '',
	Фильмы: '&field=typeNumber&search=1',
	Сериалы: '&field=typeNumber&search=2',
	Аниме: '&field=typeNumber&search=4',
	Мультфильмы: '&field=typeNumber&search=3'
}

export const sortByFormatter: { [key: string]: string } = {
	Рейтингу: '&sortField=rating.imdb',
	Популярности: '&sortField=votes.imdb',
	Дате: '&sortField=year'
}
