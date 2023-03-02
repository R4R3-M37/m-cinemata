import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
export const ROUTES_TITLE: { [key: string]: string } = {
	'/': 'Главное',
	'/persons': 'Актёры',
	'/media': 'Медиа',
	'/my': 'Моё',
	'/search': 'Поиск',
	'/settings': 'Настройки'
}

export const homeRoute = createRoute()
export const personsRoute = createRoute()
export const myRoute = createRoute()
export const searchRoute = createRoute()
export const settingsRoute = createRoute()

export const onlineCinemaRoute = createRoute<{ type: string }>()
export const moviesByGenreRoute = createRoute<{ genre: string }>()

export const searchFiltersRoute = createRoute()

export const movieRoute = createRoute<{ id: string }>()
export const movieImagesRoute = createRoute<{ id: string }>()
export const moviePersonsRoute = createRoute<{ id: string }>()
export const movieSequelsPrequelsRoute = createRoute<{ id: string }>()
export const movieSimilarRoute = createRoute<{ id: string }>()

export const personRoute = createRoute<{ id: string }>()

export const moviesBySearchRoute = createRoute<{ name: string }>()
export const personsBySearchRoute = createRoute<{ name: string }>()

export const notFoundRoute = createRoute()

export const routes = [
	{ path: '/', route: homeRoute },
	{ path: '/persons', route: personsRoute },
	{ path: '/my', route: myRoute },
	{ path: '/search', route: searchRoute },
	{ path: '/search/filters', route: searchFiltersRoute },
	{ path: '/search/movie', route: onlineCinemaRoute },
	{ path: '/search/movies/:name', route: moviesBySearchRoute },
	{ path: '/search/persons/:name', route: personsBySearchRoute },
	{ path: '/settings', route: settingsRoute },
	{ path: '/online-cinema/:type', route: onlineCinemaRoute },
	{ path: '/genres/:genre', route: moviesByGenreRoute },
	{ path: '/movies/:id', route: movieRoute },
	{ path: '/movies/:id/images', route: movieImagesRoute },
	{ path: '/movies/:id/persons', route: moviePersonsRoute },
	{ path: '/movies/:id/similar', route: movieSimilarRoute },
	{ path: '/movies/:id/sequels-and-prequels', route: movieSequelsPrequelsRoute },
	{ path: '/persons/:id', route: personRoute },
	{ path: '/name/:id', route: personRoute }
]

export const router = createHistoryRouter({
	routes,
	notFoundRoute
})
