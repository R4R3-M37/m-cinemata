import { createEffect } from 'effector'

import { recentPersonsQuery } from '~/shared/api/service'

export const fetchRecentPersonsFx = createEffect((recentPersonsIDs: string[]) => {
	if (recentPersonsIDs.length) {
		recentPersonsQuery.start({ ids: recentPersonsIDs })
	}
})
