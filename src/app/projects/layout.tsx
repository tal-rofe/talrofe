import { Metadata } from 'next';

import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

const ProjectsLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export const metadata: Metadata = {
	title: '🧀 Projects — Tal Rofe',
	description: 'Tal Rofe Projects',
};

export default ProjectsLayout;
