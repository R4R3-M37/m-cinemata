/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '500px',
			md: '700px',
			lg: '900px',
			xl: '1100px',
			'2xl': '1300px',
			'3xl': '1500px',
			'4xl': '1700px',
			'5xl': '1900px',
			'6xl': '2100px'
		},
		extend: {
			colors: {
				'd-primary': '#0f1011',
				'd-secondary': '#181a1b'
			},
			zIndex: {
				'60': '60',
				'100': '100'
			}
		}
	},
	plugins: []
}
