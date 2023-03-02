import { Trailers } from '~/shared/api/types/movies'

const regex =
	/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^/&]{10,12})/

export const getYouTubeId = (videos: Trailers[]): Trailers[] | [] => {
	if (!videos) return videos
	if (!Array.isArray(videos)) return []

	return videos
		?.filter(({ url }) => url)
		.map((video) => {
			return {
				...video,
				url: `https://www.youtube.com/embed/${regex.exec(video.url || '')?.[1]}`
			}
		})
}
