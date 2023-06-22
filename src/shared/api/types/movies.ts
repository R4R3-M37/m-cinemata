export interface MovieImagesRoot {
	total?: number
	totalPages?: number
	items?: {
		imageUrl: string
		previewUrl: string
	}[]
}

interface ExternalId {
	kpHD?: string
	imdb?: string
	tmdb?: number
}

interface Name {
	name: string
	language?: string
	type?: string
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
	imdb?: string
	tmdb?: number
	filmCritics?: number
	russianFilmCritics?: number
	await?: number
}

interface Logo {
	url?: string
}

export interface ShortImage {
	url?: string
	previewUrl?: string
}

export interface Video {
	url?: string
	name?: string
	site?: string
	type?: string
	size?: number
}

export interface Videos {
	trailers: Video[]
	teasers?: Video[]
}

interface Genres {
	name: string
}

interface Countries {
	name: string
}

export interface Persons {
	id?: number
	photo?: string
	name?: string
	enName?: string
	description?: string
	profession?: string
	enProfession?: string
}

interface ReviewInfo {
	count?: number
	positiveCount?: number
	percentage?: string
}

interface SeasonInfo {
	number?: number
	episodesCount?: number
}

export interface CurrencyValue {
	value?: number
	currency?: string
}

interface Fees {
	world: CurrencyValue
	russia: CurrencyValue
	usa: CurrencyValue
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

export interface LinkedMovie {
	id?: number
	name?: string
	enName?: string
	alternativeName?: string
	type: string
	poster?: ShortImage
}

interface Watchability {
	items: WatchabilityItem[]
}

export interface WatchabilityItem {
	name?: string
	logo?: Logo
	url?: string
}

interface YearRange {
	start?: number
	end?: number
}

interface Audience {
	count?: number
	country?: string
}

interface Fact {
	value: string
	type: string
	spoiler: boolean
}

interface Images {
	postersCount?: number
	backdropsCount?: number
	framesCount?: number
}

interface VendorImage {
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
	names: Name[]
	type: string
	typeNumber: number
	year?: number
	description?: string
	shortDescription?: string
	slogan?: string
	status?: string
	rating: Rating
	votes: Votes
	movieLength?: number
	ratingMpaa?: string
	ageRating?: number
	logo?: Logo
	poster?: ShortImage
	backdrop?: ShortImage
	videos: Videos
	genres: Genres[]
	countries: Countries[]
	persons: Persons[]
	reviewInfo: ReviewInfo
	seasonsInfo?: SeasonInfo[]
	budget?: CurrencyValue
	fees: Fees
	premiere: Premiere
	similarMovies: LinkedMovie[]
	sequelsAndPrequels: LinkedMovie[]
	watchability: Watchability
	releaseYears: YearRange[]
	top10?: number
	top250?: number
	ticketsOnSale?: boolean
	totalSeriesLength?: number
	seriesLength?: number
	isSeries?: boolean
	audience?: Audience[]
	facts?: Fact[]
	imagesInfo?: Images
	productionCompanies?: VendorImage[]
}

export interface MoviesRoot {
	docs: Movies[]
	total: number
	limit: number
	page: number
	pages: number
}
