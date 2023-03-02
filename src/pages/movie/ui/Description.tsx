interface Props {
	description?: string
	shortDescription?: string
}

export const Description = ({ description, shortDescription }: Props) => {
	if (!description && !shortDescription) {
		return null
	}

	return (
		<section className='font-semibold'>
			{shortDescription && (
				<>
					{shortDescription}
					<br />
					<br />
					<br />
				</>
			)}
			{description && description}
		</section>
	)
}
