import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';

import Projects from './components/Projects';

const ProjectsPage = () => {
	return (
		<PageWrapper className="max-w-[1300px]">
			<Projects />
		</PageWrapper>
	);
};

export default React.memo(ProjectsPage);
