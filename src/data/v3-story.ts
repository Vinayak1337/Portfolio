import type { CaseStudy, StoryChapter } from '@/types/story';
import BotImage from '@/assets/projects/RelicsGeneralBot.png';
import WonderLearnImage from '@/assets/projects/wonderLearnApp.png';
import ImmigrationAiImage from '@/assets/projects/Immibot.png';

export const PROFILE = {
	name: 'Vinayak Kumar',
	title: 'Frontend & Fullstack Engineer',
	tagline:
		'I build production software under pressure, learn unfamiliar systems quickly, and ship with ownership.'
};

export const STORY_CHAPTERS: StoryChapter[] = [
	{
		id: 'intro',
		period: 'Overview',
		headline: 'A product engineer shaped by speed, pressure, and real users.',
		narrative:
			'I am a software engineer focused on frontend-heavy systems, but I work end-to-end when the product demands it. This is the story of how I went from C/C++ basics to shipping production web, mobile, and AI products.',
		metrics: [
			{ label: 'Primary focus', value: 'Frontend + Fullstack' },
			{ label: 'Production mindset', value: 'Ship > Demo' }
		],
		scenePreset: {
			camera: {
				from: [0, 0.2, 8.5],
				to: [-0.8, 0.6, 6.2]
			},
			lighting: {
				ambient: 0.52,
				key: 1.1,
				rim: 0.9,
				color: '#93c5fd'
			},
			motionIntensity: 0.35,
			particleProfile: 'calm',
			colorMode: 'obsidian'
		}
	},
	{
		id: 'diploma-cpp',
		period: '2018 - 2019',
		headline: 'Diploma start. First C/C++ programs. First real engineering intent.',
		narrative:
			'I started my diploma in September 2018 and began learning C/C++ in January 2019. That phase built my base for debugging, logical thinking, and systems-style problem solving.',
		metrics: [
			{ label: 'Diploma timeline', value: 'Sep 2018 - 2021' },
			{ label: 'C/C++ start', value: 'Jan 2019' }
		],
		scenePreset: {
			camera: {
				from: [0.4, 0.3, 7.8],
				to: [1.1, 0.2, 6.5]
			},
			lighting: {
				ambient: 0.46,
				key: 1.24,
				rim: 0.84,
				color: '#38bdf8'
			},
			motionIntensity: 0.45,
			particleProfile: 'calm',
			colorMode: 'electric'
		}
	},
	{
		id: 'esports-leadership',
		period: '2019 - 2022',
		headline: 'From casual player to operations leader in a national esports ecosystem.',
		narrative:
			'I moved from player to Community Lead, Treasurer, and Lead Developer while running Relics. Our club reached #15 globally and stayed #1 in India for around three years, with partnerships across major tournament and platform brands.',
		metrics: [
			{ label: 'Global ranking peak', value: '#15' },
			{ label: 'India ranking streak', value: '#1 for ~3 years' },
			{ label: 'Partner brands', value: 'Sky, IGL, Matrix, Game.TV, Bluestacks' }
		],
		scenePreset: {
			camera: {
				from: [-0.7, 0.8, 8.6],
				to: [-1.4, 0.6, 6.7]
			},
			lighting: {
				ambient: 0.44,
				key: 1.32,
				rim: 1.06,
				color: '#fb7185'
			},
			motionIntensity: 0.8,
			particleProfile: 'surge',
			colorMode: 'ember'
		}
	},
	{
		id: 'discord-bot',
		period: '2019 - 2021',
		headline: 'Built the flagship Discord bot that automated community operations at scale.',
		narrative:
			'I started the bot in September 2019 and built it with Node.js, Discord.js, Socket.io, MongoDB, PM2, and an Ubuntu VPS setup. It managed 50,000+ users across 35+ servers and automated around 70% of manual community operations.',
		metrics: [
			{ label: 'Users managed', value: '50,000+' },
			{ label: 'Servers', value: '35+' },
			{ label: 'Manual work automated', value: '70%' }
		],
		cta: {
			label: 'See Case Study',
			href: '#case-discord-bot'
		},
		scenePreset: {
			camera: {
				from: [0.8, -0.2, 7.4],
				to: [1.6, 0.5, 6.0]
			},
			lighting: {
				ambient: 0.34,
				key: 1.38,
				rim: 1.12,
				color: '#a78bfa'
			},
			motionIntensity: 0.95,
			particleProfile: 'burst',
			colorMode: 'electric'
		}
	},
	{
		id: 'first-internship',
		period: '2021',
		headline: 'Rapid frontend ramp-up, then first internship with end-to-end MVP delivery.',
		narrative:
			'I learned HTML, CSS, JavaScript DOM, React, and TypeScript in a few months, then joined as a MERN intern in September 2021. I shipped 3 MVPs with frontend, backend, and admin systems while leading a 3-member team as a new intern.',
		metrics: [
			{ label: 'Ramp-up window', value: 'Jan - Jun 2021' },
			{ label: 'MVPs delivered', value: '3' },
			{ label: 'Team led', value: '3 engineers' }
		],
		scenePreset: {
			camera: {
				from: [-0.5, -0.4, 7.5],
				to: [0.2, 0.9, 5.9]
			},
			lighting: {
				ambient: 0.48,
				key: 1.28,
				rim: 0.92,
				color: '#22d3ee'
			},
			motionIntensity: 0.7,
			particleProfile: 'surge',
			colorMode: 'aurora'
		}
	},
	{
		id: 'wonderhood',
		period: '2021 - 2024',
		headline: 'Wonderhood: intern to leadership impact, shipping web + mobile products.',
		narrative:
			'I joined Wonderhood in November 2021, began leading within a month, and was promoted to Software Developer I in January 2022. I shipped a Next.js + Shopify landing experience, the WonderLearn app (React Native + Expo), and a teacher dashboard for analytics and reporting.',
		metrics: [
			{ label: 'Promotion speed', value: '< 2 months' },
			{ label: 'Platforms shipped', value: 'Web + iOS + Android' },
			{ label: 'Core stack', value: 'Next.js, React Native, TS' }
		],
		cta: {
			label: 'See Case Study',
			href: '#case-wonderlearn'
		},
		scenePreset: {
			camera: {
				from: [0, 0.75, 8.3],
				to: [-1.1, 1.2, 6.1]
			},
			lighting: {
				ambient: 0.5,
				key: 1.42,
				rim: 1.0,
				color: '#34d399'
			},
			motionIntensity: 0.75,
			particleProfile: 'surge',
			colorMode: 'aurora'
		}
	},
	{
		id: 'remotehire-ai',
		period: '2024',
		headline: 'RemoteHire: fullstack AI platform build and senior promotion in two months.',
		narrative:
			'I joined RemoteHire in February 2024 and built Immigration AI workflows with Next.js, TypeScript, Tailwind, Stripe, Flowise, and Python services. I was promoted to Senior Fullstack Engineer after two months.',
		metrics: [
			{ label: 'Joined', value: 'Feb 2024' },
			{ label: 'Promotion', value: 'Senior in 2 months' },
			{ label: 'Product domain', value: 'Immigration AI' }
		],
		cta: {
			label: 'See Case Study',
			href: '#case-immigration-ai'
		},
		scenePreset: {
			camera: {
				from: [-0.8, 0.4, 8.2],
				to: [0.9, -0.3, 6.0]
			},
			lighting: {
				ambient: 0.38,
				key: 1.48,
				rim: 1.08,
				color: '#f59e0b'
			},
			motionIntensity: 1,
			particleProfile: 'burst',
			colorMode: 'ember'
		}
	},
	{
		id: 'btech-freelance',
		period: '2024 onward',
		headline: 'Strategic reset: full-time B.Tech while continuing selective freelance delivery.',
		narrative:
			'I started B.Tech in August 2024, left my full-time role in November 2024, and continued contract work on meaningful products. I am now focused on roles where ownership, speed, and technical depth are expected together.',
		metrics: [
			{ label: 'B.Tech start', value: 'Aug 2024' },
			{ label: 'Career pivot', value: 'Nov 2024' },
			{ label: 'Current status', value: 'Open to frontend/fullstack roles' }
		],
		cta: {
			label: 'Jump to Contact',
			href: '#contact'
		},
		scenePreset: {
			camera: {
				from: [0.2, -0.5, 7.9],
				to: [0.1, 0.8, 5.8]
			},
			lighting: {
				ambient: 0.54,
				key: 1.26,
				rim: 0.88,
				color: '#60a5fa'
			},
			motionIntensity: 0.55,
			particleProfile: 'calm',
			colorMode: 'obsidian'
		}
	}
];

export const CASE_STUDIES: CaseStudy[] = [
	{
		id: 'discord-bot',
		title: 'Relics Discord Bot Infrastructure',
		role: 'Lead Developer',
		stack: ['Node.js', 'Discord.js', 'Socket.io', 'MongoDB', 'PM2', 'Ubuntu VPS'],
		challenge:
			'Scale moderation, tournament ops, and community workflows across dozens of servers without increasing manual admin load.',
		build:
			'Implemented an event-driven bot architecture with modular command handling, socket-driven real-time state updates, and operational tooling for moderation and scheduling.',
		outcomes: ['50,000+ users served', '35+ Discord servers operated', '70% reduction in manual chores'],
		links: [
			{ label: 'View Source Samples', href: 'https://github.com/Vinayak1337', external: true },
			{ label: 'Contact For Details', href: '#contact' }
		],
		image: BotImage,
		imageAlt: 'Dashboard view representing Discord bot operations and moderation tooling.'
	},
	{
		id: 'wonderlearn',
		title: 'WonderLearn Mobile Product',
		role: 'React Developer Intern -> Software Developer I',
		stack: ['React Native', 'Expo', 'TypeScript', 'Styled Components', 'Next.js'],
		challenge:
			'Deliver a learning product for children with production-ready mobile apps while coordinating web and dashboard touchpoints.',
		build:
			'Built core learning flows, content delivery experiences, and release-ready mobile pipelines; coordinated product delivery with the associated teacher dashboard and landing properties.',
		outcomes: [
			'Deployed to App Store and Play Store',
			'Integrated into Wonderhood production ecosystem',
			'Contributed to promotion within 2 months'
		],
		links: [
			{ label: 'Explore Work', href: '#story' },
			{ label: 'Connect on LinkedIn', href: 'https://linkedin.com/in/vinayak1337', external: true }
		],
		image: WonderLearnImage,
		imageAlt: 'WonderLearn application screen previews.'
	},
	{
		id: 'immigration-ai',
		title: 'Immigration AI Platform',
		role: 'Fullstack Engineer -> Senior Fullstack Engineer',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Flowise', 'Python'],
		challenge:
			'Build a user-facing AI product with reliable payment flow and backend orchestration for immigration guidance use-cases.',
		build:
			'Shipped core product surfaces, subscription workflows, and integration points between frontend experience and Python-based AI backend services.',
		outcomes: ['Production AI workflow delivery', 'Senior promotion in 2 months', 'Fullstack ownership across product layers'],
		links: [
			{ label: 'View Resume', href: '/Vinayak_Kumar_Resume.pdf', external: true },
			{ label: 'Reach Out', href: '#contact' }
		],
		image: ImmigrationAiImage,
		imageAlt: 'AI assistant product interface used for immigration workflow automation.'
	}
];

export const FINAL_CTA = {
	email: 'vinayak111kumar@gmail.com',
	linkedin: 'https://linkedin.com/in/vinayak1337',
	github: 'https://github.com/Vinayak1337',
	resume: '/Vinayak_Kumar_Resume.pdf'
};
