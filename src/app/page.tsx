'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import StarsCanvas from '@/components/canvas/Stars';
import Works from '@/components/Works';
import { MixpanelProvider } from 'react-mixpanel-browser';
import { usePageAnalytics } from '@/hooks/useAnalytics';
import Footer from '@/components/Footer/Footer';

export default function Page() {
	return (
		<MixpanelProvider token={process.env.NEXT_PUBLIC_MIXPANEL_TOKEN}>
			<Home />
		</MixpanelProvider>
	);
}

const Home = () => {
	usePageAnalytics();

	return (
		<>
			<Navbar />
			<main className='bg-hero-pattern bg-repeat-x bg-cover animate-bg-slide'>
				<Hero />
			</main>
			<About />
			<Experience />
			<Works />
			<div className='relative z-0'>
				<Footer />
				<Contact />
				<StarsCanvas />
			</div>
		</>
	);
};
