'use client';

import { useSyncExternalStore } from 'react';

export default function useMediaQuery(query: string) {
	return useSyncExternalStore(
		(onChange) => {
			if (typeof window === 'undefined') {
				return () => {};
			}

			const mediaQuery = window.matchMedia(query);
			mediaQuery.addEventListener('change', onChange);

			return () => {
				mediaQuery.removeEventListener('change', onChange);
			};
		},
		() => {
			if (typeof window === 'undefined') {
				return false;
			}

			return window.matchMedia(query).matches;
		},
		() => false
	);
}
