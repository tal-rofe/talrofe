import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import Intro from './components/Intro';

const Root = () => {
	return (
		<PageWrapper className="h-full items-center justify-center">
			<Intro />
		</PageWrapper>
	);
};

export default React.memo(Root);
