import { createEffect } from 'effector'

import { recentMoviesByIDsQuery } from '~/shared/api/fetch'

export const fetchRecentMovies = createEffect((recentIDs: string[]) => {
	recentMoviesByIDsQuery.start({ ids: recentIDs })
})
