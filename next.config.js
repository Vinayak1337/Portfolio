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
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.externals.push('geoip-lite');
		}
		return config;
	}
};

module.exports = withBundleAnalyzer(nextConfig);
