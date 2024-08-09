import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import Intro from './components/Intro';
import SocialMedia from './components/SocialMedia';

const About = () => {
	return (
		<PageWrapper>
			<Intro />
			<SocialMedia />
		</PageWrapper>
	);
};

export default React.memo(About);
