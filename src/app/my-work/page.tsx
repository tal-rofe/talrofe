import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';

import MyWork from './components/MyWork';

const MyWorkPage = () => {
	return (
		<PageWrapper className="max-w-[1300px]">
			<MyWork />
		</PageWrapper>
	);
};

export default React.memo(MyWorkPage);
