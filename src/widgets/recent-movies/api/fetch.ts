import { createEffect } from 'effector'

import { recentMoviesByIDsQuery } from '~/shared/api/service'

export const fetchRecentMovies = createEffect((recentIDs: string[]) => {
	recentMoviesByIDsQuery.start({ ids: recentIDs })
})
