/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(180, 29%, 50%)',
				'neutral-light-bg': 'hsl(180, 52%, 96%)',
				'neutral-light-fg': 'hsl(180, 31%, 95%)',
				'neutral-dark': 'hsl(180, 8%, 52%)',
				'neutral-very-dark': 'hsl(180, 14%, 20%)',
			},
			fontFamily: {
				LeagueSpartan: ['League Spartan', 'sans-serif'],
			},
			backgroundImage: {
				HeaderMobile: 'url(images/bg-header-mobile.svg)',
				HeaderDesktop: 'url(images/bg-header-desktop.svg)',
			},
		},
	},
	plugins: [],
};
