import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import Intro from './components/Intro';
import Links from './components/Links';

const About = () => {
	return (
		<PageWrapper>
			<Intro />
			<Links />
		</PageWrapper>
	);
};

export default React.memo(About);
