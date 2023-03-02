import { RouterProvider } from 'atomic-router-react'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import { AppLayout } from '~/app/layout/AppLayout'

import { NotFoundPage } from '~/pages/not-found/ui/NotFoundPage'

import { router } from '~/shared/routing'

import { AppRoutes } from './app/routes/AppRoutes'

import '~/app/styles/tailwind.css'

const isMobile: boolean = window.innerWidth < 570 && window.innerWidth > 338

if (!isMobile) {
	createRoot(document.getElementById('root') as HTMLElement).render(<div>Ваше устройство не поддерживается!</div>)
}

isMobile &&
	createRoot(document.getElementById('root') as HTMLElement).render(
		<RouterProvider router={router}>
			<Suspense fallback=''>
				<AppLayout>
					<ErrorBoundary fallback={<NotFoundPage />}>
						<AppRoutes />
					</ErrorBoundary>
				</AppLayout>
			</Suspense>
		</RouterProvider>
	)
