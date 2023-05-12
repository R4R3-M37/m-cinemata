export interface MovieImagesRoot {
	total?: number
	totalPages?: number
	items?: {
		imageUrl: string
		previewUrl: string
	}[]
}

export interface ExternalId {
	kpHD?: string
	imdb?: string
	tmdb?: number
}

export interface Poster {
	url?: string
	previewUrl?: string
}

export interface Backdrop {
	url?: string
	previewUrl?: string
}

export interface Rating {
	kp?: number
	imdb?: number
	tmdb?: number
	filmCritics?: number
	russianFilmCritics?: number
	await?: number
}

export interface Votes {
	kp?: string
	imdb?: number
	tmdb?: number
	filmCritics?: number
	russianFilmCritics?: number
	await?: number
}

export interface Trailers {
	url?: string
	name?: string
	site?: string
	type?: string
}

export interface Videos {
	trailers?: Trailers[]
	teasers?: never[]
}

export interface Budget {
	value?: number
	currency?: string
}

export interface CurrencyValue {
	value?: number
	currency?: string
}

export interface Fees {
	world?: CurrencyValue
	russia?: CurrencyValue
	usa?: CurrencyValue
}

export interface Premiere {
	country?: string
	world?: string
	russia?: string
	digital?: string
	cinema?: string
	bluray?: string
	dvd?: string
}

export interface WatchabilityLogo {
	url?: string
}

export interface WatchabilityItems {
	name?: string
	logo: WatchabilityLogo
	url: string
}

export interface Watchability {
	items?: WatchabilityItems[]
}

export interface Countries {
	name?: string
}

export interface Facts {
	value: string
	type: string
	spoiler: boolean
}

export interface Genres {
	name?: string
}

export interface Names {
	name: string
	language?: string
	type?: string
}

export interface Persons {
	id?: number
	photo?: string
	name?: string
	enName?: string
	description: string
	profession: string
	enProfession: string
}

export interface SeasonsInfo {
	number?: number
	episodesCount?: number
}

export interface SequelsAndPrequel {
	id?: number
	name: string
	enName: string
	alternativeName: string
	type?: string
	poster: Poster
}

export interface LinkedMovie {
	id?: number
	name: string
	enName: string
	alternativeName: string
	type?: string
	poster: Poster
}

export interface SimilarMovie {
	id?: number
	name: string
	enName: string
	alternativeName: string
	type?: string
	poster: Poster
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
	postersCount: number
	backdropsCount: number
	framesCount: number
}

export interface ReleaseYears {
	start?: number
	end?: number
}

export interface Audience {
	count: number
	country: string
}

export interface ProductionCompanies {
	name?: string
	url?: string
	previewUrl?: string
}

export interface Movies {
	id: number
	externalId: ExternalId
	name?: string
	alternativeName?: string
	enName?: string
	names: Names[]
	type: string
	typeNumber: number
	year?: number
	description?: string
	shortDescription?: string
	slogan?: string
	status?: string
	rating?: Rating
	votes?: Votes
	movieLength?: number
	ratingMpaa?: string
	ageRating?: number
	logo?: WatchabilityLogo
	poster?: Poster
	backdrop?: Backdrop
	videos?: Videos
	genres?: Genres[]
	countries?: Countries[]
	persons?: Persons[]
	reviewInfo?: never
	seasonsInfo?: SeasonsInfo
	budget?: Budget
	fees?: Fees
	premiere?: Premiere
	similarMovies?: LinkedMovie[]
	sequelsAndPrequels?: LinkedMovie[]
	watchability?: Watchability
	releaseYears?: ReleaseYears
	top10?: number
	top250?: number
	ticketsOnSale?: boolean
	totalSeriesLength?: number
	seriesLength?: number
	isSeries: boolean
	audience?: Audience[]
	facts: Facts[]
	imagesInfo: ImagesInfo
	productionCompanies: ProductionCompanies[]
}

export interface MoviesRoot {
	docs?: Movies[]
	page?: number
	pages?: number
	total?: number
	limit?: number
}
