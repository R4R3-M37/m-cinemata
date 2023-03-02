import { useRouter } from 'atomic-router-react'
import { useUnit } from 'effector-react'
import NProgress from 'nprogress'
import { useEffect } from 'react'

NProgress.configure({ showSpinner: false })

export const ProgressBar = () => {
	const path = useUnit(useRouter().$path)

	useEffect(() => {
		NProgress.start()
	})

	useEffect(() => {
		NProgress.done()
	}, [path])

	return <></>
}
