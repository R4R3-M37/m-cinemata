import { useEffect, useState } from 'react'

import noPoster from '~/shared/assets/images/no-poster.png'

interface Props {
	src?: string
	className?: string
	loading?: 'lazy' | 'eager'
	alt?: string
}

export const Image = ({ src, className = '', loading = 'lazy', alt = '' }: Props) => {
	const [placeholder, setPlaceholder] = useState<string>(noPoster)

	useEffect(() => {
		const img = document.createElement('img')

		if (src) {
			img.src = src
			img.onload = () => {
				setPlaceholder(src)
			}
		}
	}, [src])

	return (
		<img
			className={`${className} ${placeholder === noPoster ? 'relative -z-50' : ''} rounded shadow-lg`}
			src={placeholder}
			loading={loading}
			alt={alt}
		/>
	)
}
