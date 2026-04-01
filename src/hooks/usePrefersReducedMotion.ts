'use client';

import { useSyncExternalStore } from 'react';

export default function usePrefersReducedMotion() {
	return useSyncExternalStore(
		(onChange) => {
			if (typeof window === 'undefined') {
				return () => {};
			}

			const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
			mediaQuery.addEventListener('change', onChange);

			return () => {
				mediaQuery.removeEventListener('change', onChange);
			};
		},
		() => {
			if (typeof window === 'undefined') {
				return false;
			}

			return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		},
		() => false
	);
}
