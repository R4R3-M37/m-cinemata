import { createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'

export const contentList = ['Моё кино', 'Подборки']

export const $activeContent = createStore<string>(contentList[0])

export const changedContent = createEvent<string>()

sample({
	source: changedContent,
	target: $activeContent
})

persist({ store: $activeContent, key: 'content' })
