import { Metadata } from 'next';

import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

const BlogLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export const metadata: Metadata = {
	title: '🧀 Blog — Tal Rofe',
	description: 'Tal Rofe Blog',
};

export default BlogLayout;
