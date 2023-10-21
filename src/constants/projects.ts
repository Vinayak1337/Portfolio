import {
	CadillacsServer,
	CrwnClothing,
	DatingAppAdmin,
	DatingAppBackend,
	DatingAppLandingPage,
	FaceRecognitionApp,
	FaceRecognitionServer,
	FireworkBackend,
	FireworkFrontend,
	LevToursAdmin,
	LevToursBackend,
	LevToursLandingPage,
	MyLearning,
	PDFSPlitter,
	PicmashBackend,
	PicmashFrontend,
	RelicsAudit,
	RelicsBanHammer,
	RelicsGeneralBot,
	RoboFriends,
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
		TAGS.JavaScript,
		TAGS.ReduxSaga,
		TAGS.ReduxPersist
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
		TAGS.TypeScript,
		TAGS.ReduxSaga
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
		TAGS.TypeScript,
		TAGS.ReduxSaga,
		TAGS.ReduxPersist,
		TAGS.TailwindCSS,
		TAGS.SASS
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
		'Picmash is a budding social media application, developed as a rapid challenge during my college days. Built with React, JavaScript, and CSS, this frontend showcases my early endeavors into React development. It is like a prototype.',
	tags: [TAGS.ReactJS, TAGS.CSS, TAGS.JavaScript],
	site_link: 'https://picmash-app.netlify.app/',
	source_code_link: 'https://github.com/Vinayak1337/picmash-app',
	image: PicmashFrontend
};

const picmashBackend = {
	name: 'Picmash - Backend',
	description:
		'The backbone of the Picmash App, this server handles the core functionalities of the social media platform. Written in JavaScript & Node.js, it manages user authentication, post requests, and image storage, ensuring a seamless user experience on the frontend.',
	tags: [TAGS.NodeJS, TAGS.ExpressJS, TAGS.MongoDB, TAGS.JavaScript],
	source_code_link: 'https://github.com/Vinayak1337/picmash-server',
	image: PicmashBackend
};

const faceRecognitionFrontend = {
	name: 'Face Recognition - Frontend',
	description:
		'A personal project I developed after diving into React and TypeScript. This application showcases face detection capabilities, allowing users to upload images and instantly detect faces. It features a user dashboard for tracking uploads and offers customizable settings.',
	tags: [TAGS.ReactJS, TAGS.SASS, TAGS.Redux, TAGS.JavaScript],
	site_link: 'https://face-recognition-ht5h.netlify.app/',
	source_code_link: 'https://github.com/Vinayak1337/face-recognition-app',
	image: FaceRecognitionApp
};

const faceRecognitionBackend = {
	name: 'Face Recognition - Backend',
	description:
		'A robust server built with Node.js and Express.js, designed to handle user authentication, image storage, and face detection. Integrated with MongoDB for data persistence and the Clarifai API for precise face detection.',
	tags: [TAGS.NodeJS, TAGS.ExpressJS, TAGS.MongoDB, TAGS.JavaScript],
	source_code_link: 'https://github.com/Vinayak1337/face-recognition-server/',
	image: FaceRecognitionServer
};

const ecommerceApp = {
	name: 'Crwn Clothing',
	description:
		'An e-commerce platform built with React, Redux, and Firebase. It features a comprehensive user authentication system including google, a shopping cart, and a payment gateway through stripe, ensuring a seamless shopping experience.',
	tags: [
		TAGS.ReactJS,
		TAGS.Redux,
		TAGS.Firebase,
		TAGS.GraphQL,
		TAGS.TypeScript,
		TAGS.StyledComponents,
		TAGS.Stripe,
		TAGS.ReduxSaga,
		TAGS.ReduxPersist
	],
	site_link: 'https://crwn-clothing-pwa.netlify.app/',
	source_code_link:
		'https://github.com/Vinayak1337/e-commerce-pwa/tree/master/client',
	image: CrwnClothing
};

const RoboApp = {
	name: 'Monster Rolodex',
	description:
		'A ReactJS app that showcases my early endeavors into React development. It features a search functionality that filters through a list of robots, allowing users to find their favorite robot.',
	tags: [TAGS.ReactJS, TAGS.CSS, TAGS.TypeScript],
	site_link: 'https://monsters-rolodex-webapp.netlify.app/',
	source_code_link: 'https://github.com/Vinayak1337/robo-app',
	image: RoboFriends
};

const PDFSplitter = {
	name: 'PDF Splitter',
	company: 'Freelance',
	description:
		'A freelance project offering an intuitive interface where users can upload a PDF and view its pages in a grid format. Users can handpick individual pages or specify a range, such as "1-3,5,6-9", to select multiple pages, providing users with a PDF of their selected pages.',
	tags: [TAGS.HTML, TAGS.CSS, TAGS.JavaScript],
	site_link: 'https://pdf-splitter.vercel.app/',
	image: PDFSPlitter
};

const cadillacsServer = {
	name: 'Cadillacs - Backend',
	description:
		'A backend server managing RESTful APIs, designed to create and delete admin users with exclusive API access. It features two routes for video metadata storage: one private for admins and a community route, with JWT securing endpoints. Documentation is crafted using Swagger for clarity.',
	tags: [
		TAGS.NodeJS,
		TAGS.ExpressJS,
		TAGS.MongoDB,
		TAGS.JavaScript,
		TAGS.Swagger,
		TAGS.JWT
	],
	company: 'Freelance',
	site_link: 'https://cadillacs-server.onrender.com/docs/',
	image: CadillacsServer
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
	tourneyTicketeer,
	faceRecognitionFrontend,
	faceRecognitionBackend,
	picmashFrontned,
	picmashBackend,
	ecommerceApp,
	PDFSplitter,
	cadillacsServer,
	RoboApp
];

export default projects;
