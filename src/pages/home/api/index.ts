import { createEffect } from 'effector'

import {
	bestComedyQuery,
	bestCountOfVotesQuery,
	bestHorrorsQuery,
	comedyAnimeQuery,
	detectivesSerialsQuery,
	horrorsAnimeQuery,
	newAnimeQuery,
	newCartoonsQuery,
	newDetectivesQuery,
	newFilmsQuery,
	newMoviesQuery,
	newSerialsQuery,
	sciFiSerialsQuery,
	top10MoviesQuery,
	top250MoviesQuery
} from '~/shared/api/service'

export const fetchMoviesFx = createEffect((contentType: string) => {
	if (contentType === 'Моё кино') {
		newMoviesQuery.start({ page: 1 })
		newFilmsQuery.start({ page: 1 })
		newSerialsQuery.start({ page: 1 })
		newAnimeQuery.start({ page: 1 })
		newCartoonsQuery.start({ page: 1 })
		bestHorrorsQuery.start()
		bestCountOfVotesQuery.start()
		sciFiSerialsQuery.start()
		comedyAnimeQuery.start()
		horrorsAnimeQuery.start()
		newDetectivesQuery.start()
		bestComedyQuery.start()
	} else {
		top250MoviesQuery.start({ page: 1 })
		top10MoviesQuery.start()
		detectivesSerialsQuery.start({ page: 1 })
	}
})
