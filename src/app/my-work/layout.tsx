import { Metadata } from 'next';

import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

const MyWorkLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export const metadata: Metadata = {
	title: '🧀 My Work — Tal Rofe',
	description: 'Tal Rofe Work',
};

export default MyWorkLayout;
