interface Props {
	src: string
	backdropImage?: string
}

export const ImageBackground = ({ src, backdropImage }: Props) => {
	const isHaveBackdrop = !!backdropImage

	return (
		<>
			{isHaveBackdrop ? (
				<div
					className='-mx-4 h-80 bg-cover bg-center bg-no-repeat blur'
					style={{
						backgroundImage: `url(${backdropImage})`
					}}
				/>
			) : (
				<div className='-mx-4 h-80 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 blur' />
			)}
			<img className='absolute left-1/2 top-20 h-[250px] -translate-x-1/2 transform shadow' src={src} alt='' />
		</>
	)
}
