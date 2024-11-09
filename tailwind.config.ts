import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			heading: ['HighwayGothic'],
			body: ['LemonMilk']
		}
	},
	plugins: []
} satisfies Config;
