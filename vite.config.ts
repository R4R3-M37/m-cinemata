import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	build: {
		minify: true
	},
	server: {
		open: true,
		hmr: true,
		host: true
	},
	preview: {
		open: true
	},
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`
		}
	}
})
