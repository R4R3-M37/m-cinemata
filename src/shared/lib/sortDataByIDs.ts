import { Movies, MoviesRoot } from '~/shared/api/types/movies'
import { Docs, PersonsRoot } from '~/shared/api/types/persons'

interface Parameters {
	data?: MoviesRoot | PersonsRoot | null
	ids: string[]
}

export const sortDataByIDs = ({ data, ids }: Parameters): Docs[] | Movies[] => {
	if (!data || !data?.docs || !Array.isArray(data?.docs) || !Array.isArray(ids)) return []

	return data.docs
		.map((movie) => ({ ...movie, id: `${movie.id}` }))
		.sort((a, b) => {
			return ids.map(String).indexOf(String(a.id)) - ids.map(String).indexOf(String(b.id))
		})
}
