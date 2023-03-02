import { createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'

import { availableScrollTypes } from '~/shared/ui/scroll-type/config'

export const $scrollType = createStore(availableScrollTypes[1].type)

export const scrollTypeChanged = createEvent<string>()

sample({
	clock: scrollTypeChanged,
	target: $scrollType
})

persist({ store: $scrollType, key: 'scroll-type' })
