import { useMixpanel } from 'react-mixpanel-browser';
import { useEffect, useMemo } from 'react';
import va from '@vercel/analytics';
import { usePathname } from 'next/navigation';

export default function useAnalytics() {
	const mixpanel = useMixpanel();

	return useMemo(
		() => ({
			track: (eventName: string, data = {}) => {
				if (mixpanel?.config.token) {
					mixpanel.track(eventName, data);
				}

				va.track(eventName, data);
			},
			identify: (phone: string, data = {}) => {
				if (mixpanel.config.token) {
					mixpanel.identify(phone);
					mixpanel.people.set(data);
				}
			},
			trackServer: async (eventName: string, data = {}) => {
				if (mixpanel?.config.token) {
					try {
						const distinctId =
							mixpanel.get_distinct_id && mixpanel.get_distinct_id();
						await fetch('/api/track', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({
								event: eventName,
								properties: {
									...data,
									distinct_id: distinctId
								}
							})
						});
					} catch (e) {
						console.error('Server tracking failed', e);
					}
				}
			}
		}),
		[mixpanel]
	);
}

export const usePageAnalytics = () => {
	const pathname = usePathname();
	const { track, trackServer } = useAnalytics();

	useEffect(() => {
		track(pathname);
		trackServer('Page View Server', { path: pathname });
	}, [pathname, track, trackServer]);
};
