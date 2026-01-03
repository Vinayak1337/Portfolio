import { NextRequest, NextResponse } from 'next/server';
import Mixpanel from 'mixpanel';
import requestIp from 'request-ip';

// Initialize Mixpanel with the token
const token = process.env.MIXPANEL_TOKEN || process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const mixpanel = Mixpanel.init(token || 'MISSING_TOKEN');

export async function POST(req: NextRequest) {
	if (!token) {
		console.error('MIXPANEL_TOKEN is missing');
		return NextResponse.json(
			{ success: false, error: 'Configuration Error' },
			{ status: 500 }
		);
	}

	try {
		const body = await req.json();
		const eventName = 'geo-Visit';
		const properties = body.properties || {};

		// Get IP address
		const detectedIp = requestIp.getClientIp({
			headers: Object.fromEntries(req.headers.entries())
		} as any);

		let ip = detectedIp === '::1' ? '127.0.0.1' : detectedIp || '127.0.0.1';

		// If localhost, fetch the actual public IP of the server (dev machine)
		if (ip === '127.0.0.1' || ip === '::ffff:127.0.0.1') {
			try {
				const response = await fetch('https://api.ipify.org?format=json');
				const data = await response.json();
				ip = data.ip;
			} catch (e) {
				console.log('Failed to fetch public IP, using fallback');
				ip = '208.67.222.222'; // Fallback to OpenDNS if fetch fails
			}
		}

		// Priority 1: Check Vercel headers (Most reliable in production)
		const vercelGeo = {
			city: req.headers.get('x-vercel-ip-city'),
			country: req.headers.get('x-vercel-ip-country'),
			region: req.headers.get('x-vercel-ip-country-region'),
			latitude: req.headers.get('x-vercel-ip-latitude'),
			longitude: req.headers.get('x-vercel-ip-longitude')
		};

		let geo: any = null;

		if (vercelGeo.country) {
			geo = {
				city: vercelGeo.city ? decodeURIComponent(vercelGeo.city) : undefined,
				country: vercelGeo.country,
				region: vercelGeo.region,
				ll: [
					vercelGeo.latitude ? Number(vercelGeo.latitude) : 0,
					vercelGeo.longitude ? Number(vercelGeo.longitude) : 0
				]
			};
		}

		// Priority 2: Fallback to geoip-lite (Localhost or if headers missing)
		if (!geo) {
			try {
				// Lazy load geoip-lite to prevent startup crashes on Vercel if data files are missing
				const geoip = require('geoip-lite');
				geo = geoip.lookup(ip);
			} catch (e) {
				console.warn('GeoIP lookup failed (fallback disabled)', e);
			}
		}

		// Prepare event data
		const eventData = {
			distinct_id: properties.distinct_id || ip, // Use IP as distinct_id if not provided
			ip: ip,
			$city: geo?.city,
			$region: geo?.region,
			$country_code: geo?.country,
			$latitude: geo?.ll?.[0],
			$longitude: geo?.ll?.[1],
			// Add other properties passed from client
			...properties,
			// Store raw geo data as well if needed
			geo_data: geo
		};

		console.log('Tracking Event:', eventName, {
			ip,
			city: geo?.city,
			lat: geo?.ll?.[0],
			long: geo?.ll?.[1]
		});

		// Send to Mixpanel
		mixpanel.track(eventName, eventData);

		return NextResponse.json({
			success: true,
			ip,
			geo
		});
	} catch (error) {
		console.error('Tracking error:', error);
		return NextResponse.json(
			{
				success: false,
				error: 'Failed to track event'
			},
			{ status: 500 }
		);
	}
}
