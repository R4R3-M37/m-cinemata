import { Route } from 'atomic-router-react'

import { MoviesByGenrePage } from '~/pages/genres/MoviesByGenrePage'
import { HomePage } from '~/pages/home/HomePage'
import {
	MovieImagesPage,
	MoviePage,
	MoviePersonsPage,
	MovieSequelsPrequelsPage,
	MovieSimilarPage
} from '~/pages/movie/ui'
import { MyPage } from '~/pages/my/MyPage'
import { NotFoundPage } from '~/pages/not-found/NotFoundPage'
import { OnlineCinemaPage } from '~/pages/online-cinema/OnlineCinemaPage'
import { PersonPage } from '~/pages/persons/PersonPage'
import { PersonsPage } from '~/pages/persons/PersonsPage'
import { SearchMoviesPage } from '~/pages/search/movies/SearchMoviesPage'
import { SearchPersonsPage } from '~/pages/search/persons/SearchPersonsPage'
import { SearchFiltersPage } from '~/pages/search/SearchFiltersPage'
import { SearchPage } from '~/pages/search/SearchPage'
import { SettingsPage } from '~/pages/settings/SettingsPage'

import {
	history,
	homeRoute,
	movieImagesRoute,
	moviePersonsRoute,
	movieRoute,
	moviesByGenreRoute,
	moviesBySearchRoute,
	movieSequelsPrequelsRoute,
	movieSimilarRoute,
	myRoute,
	notFoundRoute,
	onlineCinemaRoute,
	personRoute,
	personsBySearchRoute,
	personsRoute,
	router,
	searchFiltersRoute,
	searchRoute,
	settingsRoute
} from '~/shared/routing'

router.setHistory(history)

history.listen(() => {
	window.scrollTo(0, 0)
})

export const AppRoutes = () => {
	return (
		<>
			<Route route={homeRoute} view={HomePage} />
			<Route route={personsRoute} view={PersonsPage} />
			<Route route={myRoute} view={MyPage} />
			<Route route={searchRoute} view={SearchPage} />
			<Route route={searchFiltersRoute} view={SearchFiltersPage} />
			<Route route={settingsRoute} view={SettingsPage} />
			<Route route={onlineCinemaRoute} view={OnlineCinemaPage} />
			<Route route={moviesByGenreRoute} view={MoviesByGenrePage} />
			<Route route={personRoute} view={PersonPage} />
			<Route route={movieRoute} view={MoviePage} />
			<Route route={movieImagesRoute} view={MovieImagesPage} />
			<Route route={moviePersonsRoute} view={MoviePersonsPage} />
			<Route route={movieSimilarRoute} view={MovieSimilarPage} />
			<Route route={movieSequelsPrequelsRoute} view={MovieSequelsPrequelsPage} />
			<Route route={moviesBySearchRoute} view={SearchMoviesPage} />
			<Route route={personsBySearchRoute} view={SearchPersonsPage} />
			<Route route={notFoundRoute} view={NotFoundPage} />
		</>
	)
}
