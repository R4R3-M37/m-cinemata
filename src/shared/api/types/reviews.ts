export interface Items {
	kinopoiskId?: number
	type?: string
	date?: string
	positiveRating?: number
	negativeRating?: number
	author?: string
	title?: string
	description?: string
}

export interface ReviewsRoot {
	total?: number
	totalPages?: number
	totalPositiveReviews?: number
	totalNegativeReviews?: number
	totalNeutralReviews?: number
	items?: Items[]
}
