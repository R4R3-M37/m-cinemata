import { createQuery } from '@farfetched/core'
import { RouteQuery } from 'atomic-router'
import { createEffect } from 'effector'

import { baseUrl, categoryFormatter, currentYear, sortByFormatter } from '~/shared/api/config'
import { MovieImagesRoot, Movies, MoviesRoot } from '~/shared/api/types/movies'
import { PersonRoot } from '~/shared/api/types/person'
import { PersonsRoot } from '~/shared/api/types/persons'
import { ReviewsResponse } from '~/shared/api/types/reviews'

export const movieBySearchQuery = createQuery({
	effect: createEffect(async ({ query, page }: { query: RouteQuery; page: number }): Promise<MoviesRoot> => {
		const category = categoryFormatter[query.category]
		const year = query.year === 'Любой' ? '' : `&field=year&search=${query.year}`
		const genre = query.genre === 'Любой' ? '' : `&field=genres.name&search=${query.genre}`
		const sortBy = sortByFormatter[query.sortBy]

		const response = await fetch(
			`${baseUrl}/v1/movie?field=rating.kp&search=${query.rating}${category}${genre}${year}&limit=20&page=${page}${sortBy}&sortType=-1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const movieByIDQuery = createQuery({
	effect: createEffect(async ({ id }: { id: string }): Promise<Movies> => {
		const response = await fetch(`${baseUrl}/v1/movie/${id}`, {
			method: 'GET',
			headers: {
				'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
				'Content-Type': 'application/json'
			}
		})

		return response.json()
	})
})

export const moviesByNameQuery = createQuery({
	effect: createEffect(async ({ name, page }: { name: string; page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=name&search=${name}&field=poster.url&search=!null&sortField=year&sortType=-1&isStrict=false&page=${page}`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const moviesByIDsQuery = createQuery({
	effect: createEffect(async ({ ids }: { ids: string[] }): Promise<MoviesRoot> => {
		const idsFormatted = ids.map((id) => `search=${id}&field=id`).join('&')

		const response = await fetch(`${baseUrl}/v1/movie?${idsFormatted}&limit=50`, {
			method: 'GET',
			headers: {
				'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
				'Content-Type': 'application/json'
			}
		})

		return response.json()
	})
})

export const recentMoviesByIDsQuery = createQuery({
	effect: createEffect(async ({ ids }: { ids: string[] }): Promise<MoviesRoot> => {
		const idsFormatted = ids.map((id) => `search=${id}`).join('&')
		console.log(idsFormatted)
		const response = await fetch(`${baseUrl}/v1/movie?${idsFormatted}&limit=10`, {
			method: 'GET',
			headers: {
				'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
				'Content-Type': 'application/json'
			}
		})

		return response.json()
	})
})

export const moviesByGenreQuery = createQuery({
	effect: createEffect(async ({ genre, page }: { genre: string; page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=${genre}&sortField=rating.kp&field=name&search=!null&field=poster.url&search=!null&sortType=-1&page=${page}`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const newMoviesQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=rating.kp&search=6-10&field=year&search=${
				currentYear - 1
			}-${currentYear}&sortField=year&sortType=1&limit=20&page=${page}&sortField=votes.imdb&sortType=-1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const newFilmsQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=rating.kp&search=6-10&field=year&search=${
				currentYear - 1
			}-${currentYear}&field=typeNumber&search=1&limit=20&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '46H7C5X-FSWMC00-PBP35RN-8VPD7YX',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const newSerialsQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=rating.kp&search=6-10&field=year&search=${
				currentYear - 1
			}-${currentYear}&field=typeNumber&search=2&limit=20&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const newAnimeQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=rating.kp&search=6-10&field=year&search=${
				currentYear - 1
			}-${currentYear}&field=typeNumber&search=4&limit=20&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const newCartoonsQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=rating.kp&search=6-10&field=year&search=${
				currentYear - 1
			}-${currentYear}&field=typeNumber&search=3&limit=20&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const bestHorrorsQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=ужасы&field=rating.kp&search=7-10&field=name&search=!null&field=poster.url&search=!null&sortField=votes.kp&sortType=-1&page=1&limit=20`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const bestCountOfVotesQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(`${baseUrl}/v1/movie?sortField=votes.kp&sortType=-1&page=1&limit=20`, {
			method: 'GET',
			headers: {
				'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
				'Content-Type': 'application/json'
			}
		})

		return response.json()
	})
})

export const sciFiSerialsQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=фантастика&field=typeNumber&search=2&sortField=votes.kp&sortType=-1&sortField=year&field=name&search=!null&field=poster.url&search=!null&sortType=-1&page=1&limit=20`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const comedyAnimeQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=комедия&field=typeNumber&search=4&sortField=votes.kp&sortType=-1&sortField=year&field=name&search=!null&field=poster.url&search=!null&sortType=-1&page=1&limit=20`,
			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const bestComedyQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=комедия&field=rating.kp&search=7-10&sortField=votes.kp&sortType=-1&page=1&limit=20`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const horrorsAnimeQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=ужасы&field=typeNumber&search=4&sortField=rating.kp&sortType=-1&page=1&limit=20`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const detectivesSerialsQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=детектив&field=typeNumber&search=2&sortField=rating.kp&sortType=-1&page=${page}&limit=20`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const newDetectivesQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?field=genres.name&search=детектив&field=rating.kp&search=7-10&sortField=year&sortType=-1&page=1&limit=20`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const top250MoviesQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?top250=!null&page=${page}&limit=10`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const top10MoviesQuery = createQuery({
	effect: createEffect(async (): Promise<MoviesRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/movie?top10=!null`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const imagesByMovieIDQuery = createQuery({
	effect: createEffect(async ({ id, page = 1 }: { id: string; page?: number }): Promise<MovieImagesRoot> => {
		const response = await fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?page=${page}&type=STILL`,
			{
				headers: {
					'X-API-KEY': '91ebce8c-3782-4e78-846c-11675e86ad48'
				}
			}
		)

		return response.json()
	})
})

export const reviewsByMovieIDQuery = createQuery({
	effect: createEffect(async ({ id, page }: { id: string; page: number }): Promise<ReviewsResponse> => {
		const response = await fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/reviews?page=${page}&order=DATE_DESC`,
			{
				headers: {
					'X-API-KEY': '91ebce8c-3782-4e78-846c-11675e86ad48'
				}
			}
		)

		return response.json()
	})
})

export const personByIDQuery = createQuery({
	effect: createEffect(async ({ id }: { id: string }) => {
		const response = await fetch(
			`${baseUrl}/v1/person?field=id&search=${id}`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	}),
	mapData({ result }: { result: PersonRoot }) {
		return {
			...result,
			movies: result?.movies?.filter(({ name, rating }) => name && rating)
		}
	}
})

export const personsByNameQuery = createQuery({
	effect: createEffect(async ({ name, page }: { name: string; page: number }): Promise<PersonsRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/person?field=name&search=${name}&field=photo&search=!null&page=${page}&limit=20`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const personsByIDsQuery = createQuery({
	effect: createEffect(async ({ ids }: { ids: string[] }): Promise<PersonsRoot> => {
		const idsFormatted = ids.map((id) => `search=${id}&field=id`).join('&')

		const response = await fetch(
			`${baseUrl}/v1/person?${idsFormatted}&field=name&search=!null&field=enName&search=!null&field=photo&search=!null&limit=50`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const recentPersonsQuery = createQuery({
	effect: createEffect(async ({ ids }: { ids: string[] }): Promise<PersonsRoot> => {
		const idsFormatted = ids.map((id) => `search=${id}&field=id`).join('&')

		const response = await fetch(
			`${baseUrl}/v1/person?${idsFormatted}&field=name&search=!null&field=enName&search=!null&field=photo&search=!null`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const youngestPersonsQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<PersonsRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/person?field=age&search=21-80&field=name&search=!null&field=enName&search=!null&field=photo&search=!null&page=${page}&limit=20`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})

export const oldestPersonsQuery = createQuery({
	effect: createEffect(async ({ page }: { page: number }): Promise<PersonsRoot> => {
		const response = await fetch(
			`${baseUrl}/v1/person?field=age&search=21-80&field=name&search=!null&field=enName&search=!null&field=photo&search=!null&sortField=age&sortType=-1&page=${page}&limit=20`,

			{
				method: 'GET',
				headers: {
					'X-API-KEY': '97CT04G-7VT48YR-G0FYQ1R-BF92T79',
					'Content-Type': 'application/json'
				}
			}
		)

		return response.json()
	})
})
