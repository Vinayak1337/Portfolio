import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
	title: 'Vinayak | React & Frontend Developer',
	description:
		'Vinayak | A passionate MERN Stack Developer with a strong focus on frontend development. Experienced in building responsive web applications, server-side rendering, and RESTful APIs. Committed to continuous learning and delivering high-quality solutions.'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<link rel='icon' type='image/svg+xml' href='/logo-violet.svg' />
			<meta name='theme-color' content='#050816' />
			<body className='relative bg-primary'>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
