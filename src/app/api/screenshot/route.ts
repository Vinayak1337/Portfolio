import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: NextRequest) {
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
	} catch (error: any) {
		return new Response('Error taking screenshot', {
			status: 500,
			statusText: error.message
		});
	}
}
