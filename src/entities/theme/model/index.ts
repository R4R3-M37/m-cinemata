import { createEffect, createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/local'

export const themeChanged = createEvent<string>()
export const $theme = createStore<string>('auto')

const themeSetter = createEffect((theme: string) => {
	const html = document.getElementsByTagName('html')[0]
	html.className = theme

	if (theme === 'auto') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			themeChanged('dark')
		} else {
			themeChanged('light')
		}
	}
})

sample({
	source: themeChanged,
	target: $theme
})

sample({
	source: $theme,
	target: themeSetter
})

persist({ store: $theme, key: 'theme' })
