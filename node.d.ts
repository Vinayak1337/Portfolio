declare module 'react-mixpanel-browser' {
	export function useMixpanel(): any;
	export const MixpanelProvider: ({
		children,
		config,
		name,
		token
	}: {
		children: React.ReactNode;
		config?: any;
		name?: string;
		token?: string;
	}) => any;
}
