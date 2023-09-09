import { useQuery } from '@/hooks/useQuery';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const checkReferrer = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: () => void
) => {
	const allowedReferrer = process.env.NEXT_PUBLIC_BASE_URL!;
	const referrer = req.headers.referer;

	if (!referrer || !referrer.startsWith(allowedReferrer)) {
		return res.status(403).send('Forbidden');
	}

	next();
};

export async function GET(req: NextApiRequest) {
	let url: RegExpMatchArray | null | undefined | string = decodeURIComponent(
		req.url!
	).match(/(?<=\?url=)[^&]+/);

	if (!url)
		return new Response('Url was not provided', {
			status: 400
		});

	url = url[0];

	try {
		const browser = await puppeteer.launch({
			headless: false
		});
		const page = await browser.newPage();

		await page.setViewport({ width: 1920, height: 1080 });
		await page.goto(url, { waitUntil: 'networkidle2' });

		const screenshot = await page.screenshot({ type: 'png' });

		await browser.close();

		return new Response(screenshot, {
			headers: {
				'Content-Type': 'image/png'
			}
		});
	} catch (error) {
		return new Response('Error taking screenshot', {
			status: 300
		});
	}
}
