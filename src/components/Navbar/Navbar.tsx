import Link from 'next/link';
import Img from 'next/image';
import { logo } from '@/assets';
import NavbarRight from './NavRight';

const Navbar = () => (
	<nav className='paddingX transition-all duration-300 w-full flex items-center py-5 fixed top-0 z-50 bg-gradient-to-b from-black-200/60 to-black-100/30 backdrop-blur-md ring-1 ring-white/10'>
		<div className='transition-all duration-300 w-full flex justify-between items-center max-w-7xl mx-auto'>
			<Link href='/' className='flex items-center gap-2'>
				<Img
					loading='lazy'
					src={logo}
					alt='logo'
					className='w-9 h-9 object-contain'
				/>
				<p className='transition-all duration-300 flex items-center text-white text-lg font-bold cursor-pointer'>
					Vinayak&nbsp;
					<span className='transition-all duration-300 sm:block hidden'>
						|&nbsp;Web Developer
					</span>
				</p>
			</Link>
			<NavbarRight />
		</div>
	</nav>
);

export default Navbar;
