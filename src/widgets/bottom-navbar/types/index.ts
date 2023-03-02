import { RouteInstance } from 'atomic-router'
import { ReactNode } from 'react'

export interface NavbarLinksInterface {
	path: string | RouteInstance<object>
	text: string
	icon: ReactNode
}
