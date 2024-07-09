import React from 'react';

import PageTransitionWrapper from '@/wrappers/PageTransitionWrapper';
import Header from './Header';

type PageProps = {
	readonly children: React.ReactNode;
};

const BaseLayout = (props: PageProps) => {
	return (
		<section className="flex h-full w-full flex-col overflow-hidden">
			<Header />
			<PageTransitionWrapper>{props.children}</PageTransitionWrapper>
		</section>
	);
};

export default BaseLayout;
