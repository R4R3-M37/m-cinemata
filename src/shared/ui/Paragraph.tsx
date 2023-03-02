import { ReactNode } from 'react'

export const Paragraph = ({ children }: { children: ReactNode }) => {
	return <p className='font-light dark:text-gray-300'>{children}</p>
}
