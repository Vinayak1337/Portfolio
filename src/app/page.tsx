import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Feedbacks from '@/components/Feedbacks';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar/Navbar';
import StarsCanvas from '@/components/canvas/Stars';
import Tech from '@/components/Tech';
import Works from '@/components/Works';

export default function Home() {
	return (
		<>
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
		</>
	);
}
