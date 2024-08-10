import { Metadata } from 'next';

import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

const AboutLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export const metadata: Metadata = {
	title: '🧀 About — Tal Rofe',
	description: 'Tal Rofe About',
};

export default AboutLayout;
