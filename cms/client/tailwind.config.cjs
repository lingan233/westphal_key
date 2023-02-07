const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Futura Std"', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'drexel-dark-blue': '#102A4C',
				'drexel-yellow': '#FBC700',
				'drexel-light-blue': '#006298',
				'drexel-bright-blue': '#6CACE4',
				'drexel-light-orange': '#FF8F1C',
				'drexel-light-red': '#C14C31',
				'drexel-light-green': '#B7BF10'
			},
			screens: {
				custom: '500px'
			}
		}
	}
};
