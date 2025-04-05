/* eslint-disable import/no-default-export */
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				ibm: 'var(--font-ibm)',
				dmsans: 'var(--font-dmsans)',
				cardo: 'var(--font-cardo)',
				inter: 'var(--font-inter)',
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
			animation: {
				'slide-up': 'slideUp 0.3s ease-out',
			},
			keyframes: {
				slideUp: {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};

export default config;
