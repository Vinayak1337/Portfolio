const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				primary: '#050816',
				secondary: '#aaa6c3',
				tertiary: '#151030',
				quaternary: '#915EFF',
				'black-100': '#100d25',
				'black-200': '#090325',
				'white-100': '#f3f3f3',
				'v3-bg': '#05070d',
				'v3-surface': '#0b1120',
				'v3-accent': '#7dd3fc',
				'v3-muted': '#aab5c9'
			},
			boxShadow: {
				card: '0px 35px 120px -15px #211e35'
			},
			screens: {
				xs: '450px'
			},
			spacing: {
				29: '7.25rem',
				30: '7.5rem',
				31: '7.75rem'
			}
		}
	}
};

export default config;
