import { NextRequest, NextResponse } from 'next/server';
import Mixpanel from 'mixpanel';
import requestIp from 'request-ip';
import geoip from 'geoip-lite';

// Initialize Mixpanel with the token
const mixpanel = Mixpanel.init(
	process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || 'MISSING_TOKEN'
);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const eventName = 'geo-Visit';
		const properties = body.properties || {};

		// Get IP address
		// NextRequest headers are standard Web API Headers, request-ip expects Node-like req or headers object
		const detectedIp = requestIp.getClientIp({
			headers: Object.fromEntries(req.headers.entries())
		} as any);

		const ip = detectedIp === '::1' ? '127.0.0.1' : detectedIp || '127.0.0.1';

		// Lookup Geo information
		const geo = geoip.lookup(ip);

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
