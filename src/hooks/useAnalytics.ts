'use client';

import { useEffect, useMemo } from 'react';
import mixpanel from 'mixpanel-browser';
import va from '@vercel/analytics';
import { usePathname } from 'next/navigation';

let mixpanelInitialized = false;

const getMixpanelClient = () => {
	if (typeof window === 'undefined') {
		return null;
	}

	const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

	if (!token) {
		return null;
	}

	if (!mixpanelInitialized) {
		mixpanel.init(token, {
			track_pageview: false,
			persistence: 'localStorage'
		});
		mixpanelInitialized = true;
	}

	return mixpanel;
};

export default function useAnalytics() {
	const mixpanelClient = getMixpanelClient();

	return useMemo(
		() => ({
			track: (eventName: string, data = {}) => {
				if (mixpanelClient) {
					mixpanelClient.track(eventName, data);
				}

				va.track(eventName, data);
			},
			identify: (phone: string, data = {}) => {
				if (mixpanelClient) {
					mixpanelClient.identify(phone);
					mixpanelClient.people.set(data);
				}
			}
		}),
		[mixpanelClient]
	);
}

export const usePageAnalytics = () => {
	const pathname = usePathname();
	const { track } = useAnalytics();

	useEffect(() => {
		track(pathname);
	}, [pathname, track]);
};
