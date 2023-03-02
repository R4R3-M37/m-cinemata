import classlite from 'classlite'

interface Props {
	title?: string
	value?: string | number | string[]
	className?: string
	first?: string
	last?: string
}

export const Divider = ({ title, value, className, first, last }: Props) => {
	if (!title || !value) return null

	return (
		<div className={classlite(className, 'flex justify-between')}>
			<span className={classlite(first, 'text-start')}>{title}</span>
			<span className={classlite(last, 'text-end')}>{value}</span>
		</div>
	)
}
