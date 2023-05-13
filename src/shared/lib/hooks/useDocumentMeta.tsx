import { useEffect } from 'react'

import noPoster from '~/shared/assets/images/no-poster.png'

interface Arguments {
	title: string
	description?: string
	image?: string
}

export function useDocumentMeta({
	title,
	description = 'Фильмы из кинотеатра легально, напрямую от голливудских студий. Смотрите новинки и лучшие сериалы, кино, мультфильмы в хорошем качестве.',
	image = noPoster
}: Arguments) {
	useEffect(() => {
		if (!title) return

		const prevTitle = document.title || 'Cinemata'
		const prevImage = document.querySelectorAll('meta[property=og\\:image]')[0]?.getAttribute('content') || noPoster
		const prevDescription =
			document.querySelectorAll('meta[name=description]')[0]?.getAttribute('content') || description

		document.title = title
		document.querySelectorAll('meta[property=og\\:image]')[0]?.setAttribute('content', image)
		document.querySelectorAll('meta[property=og\\:title]')[0]?.setAttribute('content', title)
		document.querySelectorAll('meta[name=description]')[0]?.setAttribute('content', description)

		return () => {
			document.title = prevTitle
			document.querySelectorAll('meta[name=description]')[0]?.setAttribute('content', prevDescription)
			document.querySelectorAll('meta[property=og\\:image]')[0]?.setAttribute('content', prevImage)
			document.querySelectorAll('meta[property=og\\:title]')[0]?.setAttribute('content', prevTitle)
		}
	})
}
