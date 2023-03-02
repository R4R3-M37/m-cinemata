interface Props {
	src?: string
	name: string
}

export const MovieLogo = ({ src, name }: Props) => {
	const isHaveImageTitle = !!src

	return (
		<>
			{isHaveImageTitle ? (
				<img src={src} className='mt-5 w-[250px]' alt='' />
			) : (
				<h2 className='mt-5 text-center text-4xl font-bold'>{name}</h2>
			)}
		</>
	)
}
