const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				hostname: 'api.apiflash.com'
			}
		]
	}
};

module.exports = withBundleAnalyzer(nextConfig);
