import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	jobit,
	tripguide,
	threejs
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'work',
		title: 'Work'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
];

const services = [
	{
		title: 'Web Developer',
		icon: web
	},
	{
		title: 'React Native Developer',
		icon: mobile
	},
	{
		title: 'Backend Developer',
		icon: backend
	}
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html
	},
	{
		name: 'CSS 3',
		icon: css
	},
	{
		name: 'JavaScript',
		icon: javascript
	},
	{
		name: 'TypeScript',
		icon: typescript
	},
	{
		name: 'React JS',
		icon: reactjs
	},
	{
		name: 'Redux Toolkit',
		icon: redux
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind
	},
	{
		name: 'Node JS',
		icon: nodejs
	},
	{
		name: 'MongoDB',
		icon: mongodb
	},
	{
		name: 'Three JS',
		icon: threejs
	},
	{
		name: 'git',
		icon: git
	},
	{
		name: 'figma',
		icon: figma
	},
	{
		name: 'docker',
		icon: docker
	}
];

/**
 ** Detailed Experience
 */

const experiences: {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
	projectReference: string;
}[] = [
	{
		title: 'Software Developer - 1',
		company_name: 'wonderHood - from Intern to Full-Time',
		icon: 'https://media.licdn.com/dms/image/C4D0BAQE7GTwnLUxD_g/company-logo_200_200/0/1641382010936?e=1700092800&v=beta&t=v8MM0puWfmdXl0TIOYfKD-Ojy0iNzMZE1qzrpYqoP3M',
		iconBg: '#018093',
		date: 'Nov 2021 - Jan 2022 (Intern)\nJan 2022 - Present (Full-Time)',
		points: [
			'As an intern, I revamped an existing React website, addressing bugs and enhancing its alignment with design specs.',
			'Boosted user engagement through performance optimizations, notably lazy loading.',
			"Incorporated Shopify's GraphQL API, introducing e-commerce features. Developed custom Next.js APIs to handle Shopify data.",
			'Spearheaded a transition from React to Next.js, harnessing ISR, SSG, and SSR, resulting in a performance jump from 45% to 90-98%.',
			'Dived into Ionic, addressing bugs and refining structure, then pivoted to React Native, innovating the UI and ensuring robust performance.',
			'Transitioned myLearning from Ionic to React. Leading the creation of a comprehensive teacher-centric dashboard, facilitating student management, report generation, and data visualization.',
			'Embedded Mixpanel analytics across all projects, extracting key insights into user interactions.',
			'Despite team dynamics, I single-handedly developed and executed major projects, showcasing resilience and adaptability.',
			'Started with a foundational understanding of ReactJS and SASS. As project demands shifted, I swiftly expanded my expertise, mastering Next.js, React Native, Ionic, and Tailwind-CSS.',
			'This journey was complemented by a diverse toolkit utilization, encompassing, Apollo Client, GraphQL, Styled-Components, Shopify and more, underscoring my ability to deliver versatile web and mobile solutions.'
		],
		projectReference: '#wonderhood-projects'
		// projects: [
		// 	{
		// 		type: 'unitary',
		// 		project: {
		// 			name: 'wonderLearn (ReactJs)',
		// 			link: 'https://wonderhood.in/'
		// 		}
		// 	},
		// 	{
		// 		type: 'unitary',
		// 		project: {
		// 			name: 'wonderLearn (NextJs)',
		// 			link: 'https://thewonderhood.com/'
		// 		}
		// 	},
		// 	{
		// 		type: 'unitary',
		// 		project: {
		// 			name: 'wonderLearn App (React Native)',
		// 			link: 'https://wonderlearn.app.link/app'
		// 		}
		// 	},
		// 	{
		// 		type: 'unitary',
		// 		project: {
		// 			name: 'MyLearning',
		// 			link: 'https://mylearning.thewonderhood.com/'
		// 		}
		// 	}
		// ]
	},
	{
		title: 'MERN-Stack Developer',
		company_name: 'Possibillion Technologies - intern',
		icon: 'https://media.licdn.com/dms/image/C4D0BAQHc_BeBxL0h-A/company-logo_200_200/0/1519878923252?e=1700092800&v=beta&t=asB-ROZbGqLyT3brKEWe5iTfjh3qaaoeDVzW6wvjVHU',
		iconBg: '#383E56',
		date: 'Sept 2021 - Nov 2021',
		points: [
			'Developed an admin panel and a landing page in React JS, supported by a unified Node JS backend server handling APIs, socket services for facebook like feature, and Swagger documentation, for a Flutter-based dating app.',
			'Designed a tourism platform featuring a user landing page, an admin dashboard for data uploads and content management, and a backend with comprehensive Swagger documentation.',
			'Developed "Firework", a platform allowing users to craft and edit posts with images and customizable captions, which then converts these into MP4 slideshows using FFmpeg; integrated S3 for storage, MongoDB for data management, and tackled the novel challenge of FFmpeg integration.',
			'Leveraged foundational knowledge in JavaScript, gained from 2.5 years of hobbyist Discord bot development, to swiftly adapt and excel in React and Node.js environments. Despite being in the early stages of my React journey, I consistently delivered UI designs that perfectly aligned with client expectations.'
		],
		projectReference: '#possibillion-projects'
		// projects: [
		// 	{
		// 		name: 'Dating App',
		// 		type: 'package',
		// 		packages: [
		// 			{
		// 				name: 'Admin Panel',
		// 				github: 'https://github.com/Vinayak1337/dating-app.admin'
		// 			},
		// 			{
		// 				name: 'Landing Page',
		// 				github: 'https://github.com/Vinayak1337/dating-app.website'
		// 			},
		// 			{
		// 				name: 'Backend',
		// 				github: 'https://github.com/Vinayak1337/dating-app.server'
		// 			}
		// 		]
		// 	},
		// 	{
		// 		name: 'LevTours',
		// 		type: 'package',
		// 		packages: [
		// 			{
		// 				name: 'Landing Page',
		// 				link: 'https://levtours-website.netlify.app/',
		// 				github: 'https://github.com/Vinayak1337/levtours.website'
		// 			},
		// 			{
		// 				name: 'Admin Panel',
		// 				github: 'https://github.com/Vinayak1337/levtours.admin'
		// 			},
		// 			{
		// 				name: 'Backend',
		// 				github: 'https://github.com/Vinayak1337/levtours.server'
		// 			}
		// 		]
		// 	},
		// 	{
		// 		name: 'Firework',
		// 		type: 'package',
		// 		packages: [
		// 			{
		// 				name: 'Frontend',
		// 				github: 'https://github.com/Vinayak1337/firework.frontend'
		// 			},
		// 			{
		// 				name: 'Backend',
		// 				github: 'https://github.com/Vinayak1337/firework.backend'
		// 			}
		// 		]
		// 	}
		// ]
	}
];

const testimonials: {
	testimonial: string;
	name: string;
	designation: string;
	company: string;
	image: string;
}[] = [];

const projects: Project[] = [
	{
		name: 'wonderHood',
		description: 'A ReactJS website for wonderLearn',
		refId: 'wonderhood-projects',
		tags: [
			{
				name: 'ReactJS',
				color: '#61DBFB'
			},
			{
				name: 'SASS',
				color: '#CD6799'
			}
		],
		site_link: 'https://wonderhood.in/',
		image:
			'https://github-production-user-asset-6210df.s3.amazonaws.com/34209962/261813739-2b8c36d3-5921-48cf-a4c1-e3f28159cdbf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230819T181752Z&X-Amz-Expires=300&X-Amz-Signature=df001b53c5e051986f79faf1984995bfdb5aabae12a384b9883b21e282428411&X-Amz-SignedHeaders=host&actor_id=34209962&key_id=0&repo_id=563333397'
	},
	{
		name: 'wonderLearn',
		description: 'A NextJS website for wonderLearn',
		tags: [
			{
				name: 'NextJS',
				color: '#000000'
			},
			{
				name: 'TailwindCSS',
				color: '#38B2AC'
			}
		],
		site_link: 'https://thewonderlearn.com/'
	},
	{
		name: 'wonderLearn App',
		description: 'A React Native app for wonderLearn',
		site_link: 'https://wonderlearn.app.link/app',
		tags: [
			{
				name: 'React Native',
				color: '#61DBFB'
			},
			{
				name: 'Redux Toolkit',
				color: '#764ABC'
			}
		]
	},
	{
		name: 'MyLearning',
		description: 'A ReactJS website for MyLearning',
		tags: [
			{
				name: 'ReactJS',
				color: '#61DBFB'
			},
			{
				name: 'SASS',
				color: '#CD6799'
			}
		],
		site_link: 'https://mylearning.thewonderlearn.com/'
	},
	{
		name: 'Dating App - Landing Page',
		description: 'A ReactJS website for a dating app',
		refId: 'possibillion-projects',
		tags: [
			{
				name: 'ReactJS',
				color: '#61DBFB'
			},
			{
				name: 'SASS',
				color: '#CD6799'
			}
		],
		site_link: 'https://dating-app-website.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/dating-app.website'
	},
	{
		name: 'Dating App - Admin Panel',
		description: 'A ReactJS admin panel for a dating app',
		tags: [
			{
				name: 'ReactJS',
				color: '#61DBFB'
			},
			{
				name: 'SASS',
				color: '#CD6799'
			}
		],
		site_link: 'https://dating-app-admin.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/dating-app.admin'
	},
	{
		name: 'Dating App - Backend',
		description: 'A NodeJS backend for a dating app',
		tags: [
			{
				name: 'NodeJS',
				color: '#339933'
			},
			{
				name: 'ExpressJS',
				color: '#000000'
			},
			{
				name: 'MongoDB',
				color: '#47A248'
			}
		],
		source_code_link: 'https://github.com/Vinayak1337/dating-app.server'
	},
	{
		name: 'LevTours - Landing Page',
		description: 'A ReactJS website for LevTours',
		tags: [
			{
				name: 'ReactJS',
				color: '#61DBFB'
			},
			{
				name: 'SASS',
				color: '#CD6799'
			}
		],
		site_link: 'https://levtours-website.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/levtours.website'
	},
	{
		name: 'LevTours - Admin Panel',
		description: 'A ReactJS admin panel for LevTours',
		tags: [
			{
				name: 'ReactJS',
				color: '#61DBFB'
			},
			{
				name: 'SASS',
				color: '#CD6799'
			}
		],
		site_link: 'https://levtours-admin.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/levtours.admin'
	},
	{
		name: 'LevTours - Backend',
		description: 'A NodeJS backend for LevTours',
		tags: [
			{
				name: 'NodeJS',
				color: '#339933'
			},
			{
				name: 'ExpressJS',
				color: '#000000'
			},
			{
				name: 'MongoDB',
				color: '#47A248'
			}
		],
		source_code_link: 'https://github.com/Vinayak1337/levtours.server'
	},
	{
		name: 'Firework - Frontend',
		description: 'A ReactJS frontend for Firework',
		tags: [
			{
				name: 'ReactJS',
				color: '#61DBFB'
			},
			{
				name: 'SASS',
				color: '#CD6799'
			}
		],
		site_link: 'https://firework-website.netlify.app/',
		source_code_link: 'https://github.com/Vinayak1337/firework.frontend'
	},
	{
		name: 'Firework - Backend',
		description: 'A NodeJS backend for Firework',
		tags: [
			{
				name: 'NodeJS',
				color: '#339933'
			},
			{
				name: 'ExpressJS',
				color: '#000000'
			},
			{
				name: 'MongoDB',
				color: '#47A248'
			}
		],
		source_code_link: 'https://github.com/Vinayak1337/firework.backend'
	},
	{
		name: 'Relics Audit',
		description: 'A Discord bot for Relics Organization',
		tags: [
			{
				name: 'NodeJS',
				color: '#339933'
			},
			{
				name: 'DiscordJS',
				color: '#7289DA'
			}
		],
		source_code_link: 'https://github.com/Vinayak1337/RelicsAudit'
	}
];

export { services, technologies, experiences, testimonials, projects };
