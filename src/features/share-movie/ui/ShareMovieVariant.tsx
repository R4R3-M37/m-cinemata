interface Props {
	onClick: () => void
	icon: JSX.Element
	title: string
}

export const ShareMovieVariant = ({ onClick, icon, title }: Props) => {
	return (
		<button className='flex flex-col items-center' onClick={onClick}>
			{icon}
			<b className='text-xl'>{title}</b>
		</button>
	)
}
