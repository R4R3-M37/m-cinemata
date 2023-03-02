import { createEvent, createStore, sample } from 'effector'

export const createBottomPopupApi = () => {
	const changed = createEvent<boolean>()
	const $isActive = createStore<boolean>(false)

	sample({
		source: changed,
		fn: (isActive) => {
			const navbar = document.getElementById('bottom-navbar')

			if (isActive) {
				document.body.classList.add('overflow-hidden')
				navbar?.classList.add('hidden')
			} else {
				document.body.classList.remove('overflow-hidden')
				navbar?.classList.remove('hidden')
			}
			return isActive
		},
		target: $isActive
	})

	return { changed, isActive: $isActive }
}
