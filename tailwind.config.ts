import type { Config } from 'tailwindcss';

const config: Config = {
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
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-pattern': "url('/hero-bg.png')"
			},
			colors: {
				primary: '#050816',
				secondary: '#aaa6c3',
				tertiary: '#151030',
				quaternary: '#915EFF',
				'black-100': '#100d25',
				'black-200': '#090325',
				'white-100': '#f3f3f3'
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
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				slide: {
					'0%': { backgroundPosition: '100% 50%' },
					'50%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bg-slide': 'slide 100s linear infinite'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};

export default config;
