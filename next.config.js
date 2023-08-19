/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'images.unsplash.com',
			'randomuser.me',
			'media.licdn.com',
			'api.apiflash.com',
			'github.com',
			'github-production-user-asset-6210df.s3.amazonaws.com'
		]
	},
	experimental: {
		appDir: true
	}
};

module.exports = nextConfig;
