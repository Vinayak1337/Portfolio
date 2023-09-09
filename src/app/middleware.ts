import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
	matcher: '/api/:function*'
};

export function middleware(request: NextRequest) {
	const allowedReferrer = process.env.NEXT_PUBLIC_BASE_URL!;
	const referrer = request.headers.get('referer');

	if (!referrer || !referrer.startsWith(allowedReferrer)) {
		return new Response('Forbidden', {
			status: 403
		});
	}

	NextResponse.next();
}
