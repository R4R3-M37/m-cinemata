export interface Docs {
	id?: number | string
	name?: string
	enName?: string
	photo?: string
	age?: number
	sex?: string
}

export interface PersonsRoot {
	docs?: Docs[]
	total?: number
	limit?: number
	page?: number
	pages?: number
}
