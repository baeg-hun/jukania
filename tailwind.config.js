import {borderRadius, colors, fontSize, spacing} from './src/styles/theme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/App.tsx', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors,
			spacing,
			borderRadius,
			fontSize,
		},
		fontFamily: {
			sejong: ['KingSejongInstitute'],
		},
		screens: {
			375: {max: '375px'},
			390: {max: '390px'},
		},
	},
	plugins: [],
}
