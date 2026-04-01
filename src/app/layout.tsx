import type { Metadata } from 'next';
import { Fraunces, Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const sora = Sora({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-sora'
});

const fraunces = Fraunces({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-fraunces'
});

export const metadata: Metadata = {
	title: 'Vinayak Kumar | Cinematic Portfolio',
	description:
		'Frontend and fullstack engineer portfolio built as a cinematic story: leadership, product execution, and production outcomes across web, mobile, and AI systems.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${sora.variable} ${fraunces.variable}`}>
			<head>
				<link rel='icon' type='image/svg+xml' href='/logo-violet.svg' />
				<meta name='theme-color' content='#05070d' />
			</head>
			<body className="bg-black text-[#f5f5f7] antialiased">
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
