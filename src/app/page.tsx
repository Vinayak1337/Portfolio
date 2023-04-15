import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Tech from '@/components/Tech';
import Works from '@/components/Works';

export default function Home() {
	return (
		<>
			<main className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
				<Navbar />
				<Hero />
			</main>
			<About />
			<Experience />
			<Tech />
			<Works />
		</>
	);
}
