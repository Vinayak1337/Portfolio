'use client';
import { navLinks } from '@/constants';
import useAnalytics from '@/hooks/useAnalytics';
import { FC } from 'react';

const NavbarItems: FC<NavbarItemsProps> = ({
	active,
	setActive,
	toggle,
	setToggle,
	isMobile = false
}) => {
	const ulClasses = isMobile
		? 'list-none flex justify-end items-center flex-col gap-4'
		: 'list-none hidden sm:flex flex-row gap-10';

	const { track } = useAnalytics();

	const handleCLick = (title: string) => () =>
		track('Navbar Item Click', {
			title
		});

	return (
		<ul className={ulClasses + ' transition-all duration-300'}>
			{navLinks.map(({ title, url }, i) => {
				const isActive = active === title;
				const textClass = isActive ? 'text-white' : 'text-secondary';
				const fontClass = isMobile
					? 'font-poppins font-medium text-base'
					: 'hover:text-white text-lg font-medium';
				const liClasses = `${textClass} ${fontClass} cursor-pointer`;

				const handleClick = () => {
					setActive(title);
					isMobile && setToggle(!toggle);
				};

				return (
					<li key={i + title} className={liClasses} onClick={handleClick}>
						<a onClick={handleCLick(title)} href={url}>
							{title}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default NavbarItems;

interface NavbarItemsProps {
	active: string;
	setActive: (active: string) => void;
	toggle: boolean;
	setToggle: (toggle: boolean) => void;
	isMobile?: boolean;
}
