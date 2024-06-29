import React from 'react';

import PageTransitionWrapper from '@/wrappers/PageTransitionWrapper';

type PageProps = {
	readonly children: React.ReactNode;
};

const BaseLayout = (props: PageProps) => {
	return (
		<section className="flex items-start w-full h-full overflow-hidden">
			<div className="flex flex-col w-full h-full">
				<PageTransitionWrapper>{props.children}</PageTransitionWrapper>
			</div>
		</section>
	);
};

export default BaseLayout;
