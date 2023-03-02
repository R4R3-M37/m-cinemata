import { BottomNavbarLinks } from '~/widgets/bottom-navbar/config'
import { BottomNavbarLink } from '~/widgets/bottom-navbar/ui/BottomNavbarLink'

export const BottomNavbar = () => {
	return (
		<section
			id='bottom-navbar'
			className='fixed inset-x-0 bottom-0 z-60 block border-t-[2px] bg-white shadow dark:border-t-d-secondary dark:bg-d-primary dark:text-zinc-200'>
			<div className='flex justify-between'>
				{BottomNavbarLinks.map((link) => (
					<BottomNavbarLink path={link.path} text={link.text} icon={link.icon} key={link.text} />
				))}
			</div>
		</section>
	)
}
