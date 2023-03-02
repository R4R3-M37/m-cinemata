import { MovieBlock } from '~/entities/movie/MovieBlock'

import * as Types from '~/shared/api/types/movies'
import { moviePersonsRoute } from '~/shared/routing'
import { PersonCard } from '~/shared/ui/card/PersonCard'
import { ShowMore } from '~/shared/ui/scroll-type/ShowMore'

interface Props {
	persons: Types.Persons[]
	id?: string
}

export const Persons = ({ persons, id }: Props) => {
	const isMoreThan10 = persons.length > 10

	if (!persons) {
		return null
	}

	return (
		<MovieBlock to={moviePersonsRoute} id={id} title='Актёры' count={persons.length}>
			{persons.slice(0, 10).map(({ id, photo, name, enName }) => (
				<PersonCard id={id} name={name} enName={enName} photo={photo} key={id} />
			))}
			{isMoreThan10 && (
				<ShowMore
					loading={false}
					showButton={true}
					showIcon={true}
					to={moviePersonsRoute}
					id={id}
					className='h-[200px]'
				/>
			)}
		</MovieBlock>
	)
}
