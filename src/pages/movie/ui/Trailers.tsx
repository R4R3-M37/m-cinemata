import { MovieBlock } from '~/entities/movie/MovieBlock'

import { Videos } from '~/shared/api/types/movies'
import { getYouTubeId } from '~/shared/lib/getYouTubeID'

export const Trailers = ({ videos }: { videos?: Videos }) => {
	const trailers = getYouTubeId(videos?.trailers?.filter(({ site }) => site === 'youtube') || [])

	if (!trailers || trailers.length < 1) {
		return null
	}

	return (
		<MovieBlock title='Трейлеры и тизеры' count={trailers.length}>
			<div className='flex space-x-5'>
				{trailers.slice(0, 10).map((trailer, i) => (
					<div className='w-[300px]' key={i}>
						<iframe
							src={trailer.url}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							loading='lazy'
						/>
						<div className='break-words pt-2 font-semibold'>
							{trailer.name && trailer.name.length > 30
								? trailer.name.slice(0, 30) + '...'
								: trailer.name}
						</div>
					</div>
				))}
			</div>
		</MovieBlock>
	)
}
