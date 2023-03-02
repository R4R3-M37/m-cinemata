export interface Spouse {
	id?: number
	name?: string
	divorced?: boolean
	children?: number
	relation?: string
	_id?: string
}

export interface Profession {
	value?: string
}

export interface BirthPlace {
	value: string
}

export interface DeathPlace {
	value: string
}

export interface Movies {
	id?: number
	name?: string
	rating?: number
	general?: boolean
	description?: string
}

export interface Facts {
	value: string
}

export interface PersonRoot {
	spouses?: Spouse[]
	id?: number
	name?: string
	enName?: string
	photo?: string
	profession?: Profession[]
	birthPlace?: BirthPlace[]
	deathPlace?: DeathPlace[]
	facts?: Facts[]
	movies?: Movies[]
	__v?: number
	age?: number
	birthday?: string
	countAwards?: number
	death?: string
	growth?: string
	sex?: string
	updatedAt?: string
}
