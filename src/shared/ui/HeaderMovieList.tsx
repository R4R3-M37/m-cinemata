export const HeaderMovieList = ({ title }: { title: string }) => {
	return (
		<h2 className='mb-3 -mt-1 flex items-center items-center justify-between bg-white dark:bg-d-primary'>
			<div className='flex items-center font-mono font-mono text-2xl'>
				<b>{title}</b>
			</div>
		</h2>
	)
}
