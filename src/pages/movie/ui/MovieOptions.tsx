import { AddToFavorite } from '~/features/movie-add-to-favorite/AddToFavorite'
import { ShareMovie } from '~/features/share-movie/ShareMovie'

interface Props {
	id: string
	name: string
	image: string
}

export const MovieOptions = ({ id, name, image }: Props) => {
	return (
		<div className='flex space-x-4'>
			<AddToFavorite id={id} name={name} />
			<ShareMovie name={name} image={image} />
		</div>
	)
}
