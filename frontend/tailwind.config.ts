/* eslint-disable import/no-default-export */
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				sans: 'var(--font-inter)',
				ibm: 'var(--font-ibm)',
				dmsans: 'var(--font-dmsans)',
				cardo: 'var(--font-cardo)',
				inter: 'var(--font-inter)',
				ptSerif: 'var(--font-pt-serif)',
			},
		},
	},
	plugins: [],
};

export default config;
