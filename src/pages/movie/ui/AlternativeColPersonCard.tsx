import { Link } from 'atomic-router-react'

import { Docs } from '~/shared/api/types/persons'
import noPoster from '~/shared/assets/images/no-poster.png'
import { IoIosArrowForward } from '~/shared/icons'
import { personRoute } from '~/shared/routing'
import { Image } from '~/shared/ui/Image'

type Props = Omit<Docs, 'sex'>

export const AlternativeColPersonCard = ({ id, photo, name, enName }: Props) => {
	if (!id || !name) {
		return null
	}

	return (
		<Link to={personRoute} params={{ id: String(id) }} key={id}>
			<div className='-mx-4 flex flex-row items-center justify-between'>
				<div className='flex flex-row'>
					<Image src={photo || noPoster} className='w-[70px]' alt='' />
					<div className='flex flex-col justify-between px-5'>
						<div className=''>
							<h2 className='text-lg font-bold'>{name}</h2>
							<p>{enName}</p>
						</div>
					</div>
				</div>
				<IoIosArrowForward className='text-2xl text-gray-500' />
			</div>
		</Link>
	)
}
