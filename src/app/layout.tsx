import type { Metadata } from 'next';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import AppWrapper from '@/wrappers/AppWrapper';
import ThemeProvider from '@/providers/ThemeProvider';

import '../styles/globals.css';

type Props = {
	readonly children: React.ReactNode;
};

export const metadata: Metadata = {
	title: 'Tal Rofe',
	description: 'Tal Rofe Website',
};

const RootLayout = (props: Props) => {
	return (
		<AppWrapper>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				{props.children}
			</ThemeProvider>
		</AppWrapper>
	);
};

export default RootLayout;
