'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Feedbacks from '@/components/Feedbacks';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import StarsCanvas from '@/components/canvas/Stars';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import { MixpanelProvider } from 'react-mixpanel-browser';

export default function Home() {
	return (
		<MixpanelProvider token={process.env.NEXT_PUBLIC_MIXPANEL_TOKEN}>
			<Navbar />
			<main className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
				<Hero />
			</main>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<div className='relative z-0'>
				<Contact />
				<StarsCanvas />
			</div>
		</MixpanelProvider>
	);
}
