import { PersonRoot } from '~/shared/api/types/person'

export interface PersonsRoot {
	docs?: PersonRoot[]
	total?: number
	limit?: number
	page?: number
	pages?: number
}
