import {
	DatingAppAdmin,
	DatingAppBackend,
	DatingAppLandingPage,
	FireworkBackend,
	FireworkFrontend,
	LevToursAdmin,
	LevToursBackend,
	LevToursLandingPage,
	MyLearning,
	RelicsAudit,
	RelicsBanHammer,
	RelicsGeneralBot,
	TourneyTicketeer,
	wonderHood,
	wonderLearn,
	wonderLearnApp
} from '@/assets';
import TAGS from './tech-tags';

const wonderhood = {
	name: 'wonderHood',
	description:
		"A landing page introducing parents to wonderLearn's offerings. It showcases online courses, providing insights into the educational journey awaiting their children.",
	refId: 'wonderhood-projects',
	tags: [
		TAGS.ReactJS,
		TAGS.SASS,
		TAGS.Shopify,
		TAGS.ReduxToolkit,
		TAGS.JavaScript
	],
	site_link: 'https://wonderhood.in/',
	image: wonderHood,
	company: 'wonderHood'
};

const wonderlearn = {
	name: 'wonderLearn',
	description:
		'A landing page that serves as a hub for educational content, featuring blogs, school-focused resources, and a toy store for kids. Designed as a one-stop destination for both learning and play.',
	tags: [
		TAGS.NextJS,
		TAGS.TailwindCSS,
		TAGS.Shopify,
		TAGS.GraphQL,
		TAGS.TypeScript
	],
	site_link: 'https://thewonderlearn.com/',
	company: 'wonderHood',
	image: wonderLearn
};

const wonderlearnApp = {
	name: 'wonderLearn App',
	description:
		'A mobile app designed for kids aged 2-6, blending fun with education through games and videos. While the web caters to educators, the app delights young learners.',
	site_link: 'https://wonderlearn.app.link/app',
	tags: [
		TAGS.ReactNative,
		TAGS.Ionic,
		TAGS.Expo,
		TAGS.StyledComponents,
		TAGS.ReduxToolkit,
		TAGS.TypeScript
	],
	company: 'wonderHood',
	image: wonderLearnApp
};

const mylearning = {
	name: 'MyLearning',
	description:
		'A platform for educators, MyLearning centralizes student management. It offers detailed reports and data visualization, enhancing the teaching process.',
	tags: [
		TAGS.ReactJS,
		TAGS.StyledComponents,
		TAGS.ReduxToolkit,
		TAGS.Ionic,
		TAGS.TypeScript
	],
	site_link: 'https://mylearning.thewonderlearn.com/',
	company: 'wonderHood',
	image: MyLearning
};

const datingappLandingPage = {
	name: 'Dating App - Landing Page',
	description:
		'A captivating landing page designed for coffee shop owners and users. Coffee shops can register to kickstart their journey, while users are directed to app stores for downloading the dating app.',
	refId: 'possibillion-projects',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.TypeScript],
	site_link: 'https://dating-app-website.netlify.app/',
	source_code_link: 'https://dating-app-landing.netlify.app',
	company: 'Possibillion Technologies',
	image: DatingAppLandingPage
};

const datingappServer = {
	name: 'Dating App - Backend',
	description:
		'A robust NodeJS backend that seamlessly processes requests for both the landing page and admin panel. It also features a socket server, enabling Facebook-like functionality for the dating app.',
	tags: [
		TAGS.NodeJS,
		TAGS.ExpressJS,
		TAGS.MongoDB,
		TAGS.SocketIO,
		TAGS.JavaScript,
		TAGS.Swagger
	],
	source_code_link: 'https://github.com/Vinayak1337/dating-app.server',
	site_link: 'https://dating-app-server-gdjw.onrender.com/docs',
	company: 'Possibillion Technologies',
	image: DatingAppBackend
};

const datingappAdmin = {
	name: 'Dating App - Admin Panel',
	description:
		'A comprehensive admin panel that empowers administrators to manage and monitor coffee shop owners, handle requests, and oversee the dating app users, ensuring smooth operations.',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
	site_link: 'https://dating-app-admin-site.netlify.app',
	source_code_link: 'https://github.com/Vinayak1337/dating-app.admin',
	company: 'Possibillion Technologies',
	image: DatingAppAdmin
};

const levtoursLadingPage = {
	name: 'LevTours - Landing Page',
	description:
		'A vibrant tourism platform where users can reserve hotel rooms, read travel blogs, and explore curated tourist experiences.',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.TypeScript],
	site_link: 'https://levtours.netlify.app/',
	source_code_link: 'https://github.com/Vinayak1337/levtours.website',
	company: 'Possibillion Technologies',
	image: LevToursLandingPage
};

const levtoursAdmin = {
	name: 'LevTours - Admin Panel',
	description:
		'A comprehensive dashboard for admins to oversee user activities, manage bookings, curate blogs, and introduce promotions via coupons or bulk data imports.',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
	site_link: 'https://levtours-admin-panel.netlify.app',
	source_code_link: 'https://github.com/Vinayak1337/levtours.admin',
	company: 'Possibillion Technologies',
	image: LevToursAdmin
};

const levtoursServer = {
	name: 'LevTours - Backend',
	description:
		'A robust NodeJS backend supporting the entire LevTours ecosystem. Features detailed API documentation in Swagger for seamless integration.',
	tags: [
		TAGS.NodeJS,
		TAGS.ExpressJS,
		TAGS.MongoDB,
		TAGS.Swagger,
		TAGS.JavaScript
	],
	site_link: 'https://levtours-server.onrender.com/docs',
	source_code_link: 'https://github.com/Vinayak1337/levtours.server',
	company: 'Possibillion Technologies',
	image: LevToursBackend
};

const fireworkFrontend = {
	name: 'Firework - Frontend',
	description:
		'A ReactJS platform for users to upload images or videos with customizable captions. Features a real-time upload progress bar for enhanced user experience.',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
	site_link: 'https://firework-website.netlify.app/',
	source_code_link: 'https://github.com/Vinayak1337/firework.frontend',
	company: 'Possibillion Technologies',
	image: FireworkFrontend
};

const fireworkBackend = {
	name: 'Firework - Backend',
	description:
		'A NodeJS backend that processes uploads, overlays captions using FFmpeg, and stores the final content in MongoDB and S3.',
	tags: [
		TAGS.NodeJS,
		TAGS.ExpressJS,
		TAGS.MongoDB,
		TAGS.FFmpeg,
		TAGS.S3,
		TAGS.JavaScript
	],
	source_code_link: 'https://github.com/Vinayak1337/firework.backend',
	company: 'Possibillion Technologies',
	image: FireworkBackend
};

const relicsAudit = {
	name: 'Relics Audit',
	description:
		'A Discord bot for the Relics Organization, offering real-time club monitoring, member verification, seasonal ladder management, and detailed statistics, ensuring a seamless experience for the community.',
	tags: [TAGS.DiscordJS, TAGS.JavaScript, TAGS.MongoDB, TAGS.NodeJS],
	source_code_link: 'https://github.com/Vinayak1337/RelicsAudit',
	image: RelicsAudit
};

const relicsGeneral = {
	name: 'Relics General',
	description:
		'A versatile Discord bot developed for the Relics Organisation using Node.js and JavaScript. It enhances community engagement with features like a modmail system for direct user- moderator communication, role management, cross-server announcements, and a suite of fun and utility commands.',
	tags: [TAGS.DiscordJS, TAGS.JavaScript, TAGS.MongoDB, TAGS.NodeJS],
	source_code_link: 'https://github.com/Vinayak1337/relics-general-bot',
	image: RelicsGeneralBot
};

const relicsBanHammer = {
	name: 'Relics Ban Hammer',
	description:
		'Relics Ban Hammer is a dedicated Discord bot developed for the Relics Organisation. Utilizing Node.js and JavaScript, its primary mission is to enforce consistent moderation by enabling chain bans or unbans across multiple servers.',
	tags: [TAGS.DiscordJS, TAGS.JavaScript, TAGS.MongoDB, TAGS.NodeJS],
	source_code_link: 'https://github.com/Vinayak1337/RelicsBanHammer',
	image: RelicsBanHammer
};

const tourneyTicketeer = {
	name: 'Tourney Ticketeer',
	description:
		'Tourney Ticketeer is a Discord bot developed for tournament organizers, streamlining the payment process for winners. Users initiate a ticket to specify their payment method, and upon completion, the bot manages notifications, role assignments, and logs all activities for transparency.',
	tags: [TAGS.DiscordJS, TAGS.JavaScript, TAGS.NodeJS],
	source_code_link: 'https://github.com/Vinayak1337/TourneyTicketeer/',
	image: TourneyTicketeer
};

const picmashFrontned = {
	name: 'Picmash - Frontend',
	description:
		'A ReactJS frontend for a social media platform where users can upload images, follow other users, and engage with content via likes and comments.',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
	site_link: 'https://picmash.netlify.app/',
	source_code_link: 'https://github.com/Vinayak1337/picmash.frontend'
};

const picmashBackend = {
	name: 'Picmash - Backend',
	description:
		'A NodeJS backend that processes uploads, overlays captions using FFmpeg, and stores the final content in MongoDB and S3.',
	tags: [
		TAGS.NodeJS,
		TAGS.ExpressJS,
		TAGS.MongoDB,
		TAGS.FFmpeg,
		TAGS.S3,
		TAGS.JavaScript
	],
	source_code_link: 'https://github.com/Vinayak1337/picmash.backend',
	site_link: 'https://picmash-backend.onrender.com/docs'
};

const faceRecognitionFrontend = {
	name: 'Face Recognition - Frontend',
	description:
		'A ReactJS frontend for a face recognition app that detects faces in images using Clarifai API.',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
	site_link: 'https://facerecognitionapp.netlify.app/',
	source_code_link: 'https://github.com/Vinayak1337/face-recognition.frontend'
};

const projects: Project[] = [
	wonderhood,
	wonderlearn,
	wonderlearnApp,
	mylearning,
	datingappLandingPage,
	datingappAdmin,
	datingappServer,
	levtoursLadingPage,
	levtoursAdmin,
	levtoursServer,
	fireworkFrontend,
	fireworkBackend,
	relicsAudit,
	relicsGeneral,
	relicsBanHammer,
	tourneyTicketeer
];

export default projects;
