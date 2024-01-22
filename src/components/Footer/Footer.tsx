import { Comment, Email, Github, Linkedin } from '@/assets';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

const Footer = () => (
	<footer className='w-full'>
		<nav className='container mx-auto p-10 md:px-20 flex justify-around items-stretch flex-wrap gap-5'>
			{FooterLinks.map(({ href, image, text }) => (
				<FooterLink key={href + '-footer-link'} href={href} image={image}>
					{text}
				</FooterLink>
			))}
		</nav>
	</footer>
);

export default Footer;

const FooterLink: FC<
	PropsWithChildren & { href: string; image: string | StaticImageData }
> = ({ href, children, image }) => (
	<div className='flex items-center space-x-4'>
		<Image
			src={image}
			alt={children?.toString() || ''}
			width={30}
			height={30}
		/>
		<Link
			className='text-lg text-purple-700 font-semibold animated-underline'
			href={href}>
			{children}
		</Link>
	</div>
);

const FooterLinks = [
	{
		href: 'mailto:vinayak111kumar@gmail.com',
		image: Email,
		text: 'Email'
	},
	{
		href: 'https://github.com/Vinayak1337',
		image: Github,
		text: 'Github'
	},
	{
		href: 'https://www.linkedin.com/in/vinayak1337',
		image: Linkedin,
		text: 'Linkedin'
	},
	{
		href: 'https://discord.com/users/359223782747144192',
		image: Comment,
		text: 'Discord'
	}
];
