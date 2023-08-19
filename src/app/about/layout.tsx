export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<link rel='icon' type='image/svg+xml' href='/logo-violet.svg' />
			<meta name='theme-color' content='#050816' />
			<body className='relative bg-primary'>{children}</body>
		</html>
	);
}
