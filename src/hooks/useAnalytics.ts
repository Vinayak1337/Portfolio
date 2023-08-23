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
			}
		}),
		[mixpanel]
	);
}

export const usePageAnalytics = () => {
	const pathname = usePathname();
	const { track } = useAnalytics();

	useEffect(() => {
		track(pathname, {
			pathname
		});
	}, [pathname, track]);
};
