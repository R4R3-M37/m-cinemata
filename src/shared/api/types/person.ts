interface BirthPlace {
	value: string
}

interface DeathPlace {
	value: string
}

interface Spouses {
	id: number
	name: string
	divorced: boolean
	divorcedReason: string
	sex: string
	children: number
	relation: string
}

interface Profession {
	value: string
}

interface Movie {
	id: number
	name?: string
	alternativeName?: string
	rating?: number
	general?: boolean
	description?: string
	enProfession?: string
}

export interface Facts {
	value: string
}

export interface PersonRoot {
	id: number
	name?: string
	enName?: string
	photo?: string
	sex?: string
	growth?: number
	birthday?: string
	death?: string
	age?: number
	birthPlace?: BirthPlace[]
	deathPlace?: DeathPlace[]
	spouses: Spouses
	countAwards: number
	profession?: Profession[]
	facts?: Facts[]
	movies?: Movie[]
}
