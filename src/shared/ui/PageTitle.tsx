interface Props {
	title: string
	color: string
	isUppercase: boolean
}

export const PageTitle = ({ title, color, isUppercase }: Props) => {
	return (
		<h2 className={`${color} ${isUppercase && 'uppercase'} text-3xl`}>
			<b>{title}</b>
		</h2>
	)
}
