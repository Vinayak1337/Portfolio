/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com', 'randomuser.me']
	},
	experimental: {
		appDir: true
	}
};

module.exports = nextConfig;
