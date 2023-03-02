export interface MovieImagesRoot {
	total?: number
	totalPages?: number
	items?: {
		imageUrl: string
		previewUrl: string
	}[]
}

export interface ExternalId {
	kpHD?: number
	imdb?: string
	tmdb?: number
	_id?: string
}

export interface Poster {
	_id?: string
	url?: string
	previewUrl?: string
}

export interface Backdrop {
	_id?: string
	url?: string
	previewUrl?: string
}

export interface Rating {
	kp?: number
	imdb?: number
	filmCritics?: number
	russianFilmCritics?: number
	await?: number
	_id?: string
}

export interface Votes {
	kp?: number
	imdb?: number
	filmCritics?: number
	russianFilmCritics?: number
	await?: number
	_id?: string
}

export interface Trailers {
	url?: string
	name?: string
	site?: string
	type?: string
	_id?: string
}

export interface Videos {
	_id?: string
	trailers?: Trailers[]
	teasers?: never[]
}

export interface Budget {
	_id?: string
	value?: number
	currency?: string
}

export interface World {
	value?: number
	currency?: string
	_id?: string
}

export interface Russia {
	value?: number
	currency?: string
	_id?: string
}

export interface Usa {
	value?: number
	currency?: string
	_id?: string
}

export interface Fees {
	world?: World
	russia?: Russia
	usa?: Usa
	_id?: string
}

export interface Premiere {
	_id?: string
	country?: string
	world?: string
	russia?: string
	cinema?: string
	dvd?: string
	bluray?: string
	digital?: string
}

export interface Logo {
	url?: string
	_id?: string
}

export interface Items {
	logo?: Logo
	name?: string
	url?: string
	_id?: string
}

export interface Watchability {
	items?: Items[]
	_id?: string
}

export interface Countries {
	name?: string
}

export interface Facts {
	value?: string
	type?: string
	spoiler?: boolean
}

export interface Genres {
	name?: string
}

export interface Names {
	name?: string
}

export interface Persons {
	id?: number
	photo?: string
	name?: string
	enName?: string
	enProfession?: string
}

export interface SeasonsInf {
	number?: number
	episodesCount?: number
}

export interface SequelsAndPrequel {
	_id?: string
	id?: number
	name?: string
	enName?: string
	alternativeName?: string
	type?: string
	poster?: Poster
}

export interface SimilarMovie {
	_id?: string
	id?: number
	name?: string
	enName?: string
	alternativeName?: string
	poster?: Poster
}

export interface SpokenLanguage {
	name?: string
	nameEn?: string
}

export interface Technology {
	_id?: string
	hasImax?: boolean
	has3D?: boolean
}

export interface ImagesInfo {
	_id?: string
	framesCount?: number
}

export interface ReleaseYears {
	start?: number
	end?: number
	_id?: string
}

export interface Movies {
	externalId?: ExternalId
	logo?: Logo
	poster?: Poster
	backdrop?: Backdrop
	rating?: Rating
	votes?: Votes
	videos?: Videos
	budget?: Budget
	fees?: Fees
	premiere?: Premiere
	watchability?: Watchability
	collections?: never[]
	updateDates?: never[]
	id?: number | string
	alternativeName?: string
	countries?: Countries[]
	createdAt?: string
	description?: string
	enName?: string
	facts?: Facts[]
	genres?: Genres[]
	movieLength?: number
	name?: string
	names?: Names[]
	persons?: Persons[]
	productionCompanies?: never[]
	ratingMpaa?: string
	seasonsInfo?: SeasonsInf[]
	sequelsAndPrequels?: SequelsAndPrequel[]
	shortDescription?: string
	similarMovies?: SimilarMovie[]
	slogan?: string
	spokenLanguages?: SpokenLanguage[]
	status?: string
	technology?: Technology
	ticketsOnSale?: boolean
	type?: string
	typeNumber?: number
	updatedAt?: string
	year?: number
	imagesInfo?: ImagesInfo
	ageRating?: number
	releaseYears?: ReleaseYears[]
	top10?: number
	top250?: number
	lists?: never[]
	createDate?: string
}

export interface MoviesRoot {
	docs?: Movies[]
	page?: number
	pages?: number
	total?: number
	limit?: number
}
