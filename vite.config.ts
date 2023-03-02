import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
	plugins: [react(), mkcert()],
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
