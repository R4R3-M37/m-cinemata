import { createEvent, createStore } from 'effector'

export const createAlertsApi = () => {
	const changed = createEvent<boolean>()
	const $isActive = createStore<boolean>(false).on(changed, (_, changedActive) => changedActive)

	return { isActive: $isActive, changed }
}
