import { Link } from 'atomic-router-react'

import { PersonRoot } from '~/shared/api/types/person'
import { personRoute } from '~/shared/routing'
import { Image } from '~/shared/ui/Image'

type Props = Omit<PersonRoot, 'sex'>

export const PersonCard = ({ id, photo, age, name, enName }: Props) => {
	return (
		<Link to={personRoute} params={{ id: String(id) }} className='flex' key={id}>
			<div className='dark:bg-primary relative w-[135px]'>
				<div className='relative'>
					{!!age && (
						<div className='absolute top-[10px] left-[-5px] rounded bg-white px-1.5 font-bold text-black'>
							{age}
						</div>
					)}
					<Image className='h-[200px] rounded-sm' src={photo} />
					<div className={`${name && name.length > 20 && 'text-sm'} font-semibold`}>{name}</div>
					<p
						className={`${
							enName && enName.length > 20 && 'text-sm'
						} font-light text-gray-500 dark:text-gray-400`}>
						{enName}
					</p>
				</div>
			</div>
		</Link>
	)
}
