import { useMixpanel } from 'react-mixpanel-browser';
import { useEffect, useMemo } from 'react';
import va from '@vercel/analytics';
import { useRouter } from 'next/router';

export default function useAnalytics() {
	const mixpanel = useMixpanel();

	return useMemo(
		() => ({
			track: (eventName: string, data = {}) => {
				if (mixpanel.config.token) {
					mixpanel.track(eventName, data);
				}

				va.track(eventName, data);
			},
			identify: (phone: string, data = {}) => {
				if (mixpanel.config.token) {
					mixpanel.identify(phone);
					mixpanel.people.set(data);
				}
			}
		}),
		[mixpanel]
	);
}

export const usePageAnalytics = () => {
	const router = useRouter?.call(null);
	const { track } = useAnalytics();

	useEffect(() => {
		track(router.pathname, {
			...router
		});
	}, [router, track]);
};
