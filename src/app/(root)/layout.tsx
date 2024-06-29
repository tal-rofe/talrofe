import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

const RootLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export const metadata = {
	title: 'Home',
	description: 'Tal Rofe Website',
};

export default RootLayout;
