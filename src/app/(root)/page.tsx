import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import Anton from './components/Anton';

const Root = () => {
	return (
		<PageWrapper className="border-4 border-red-500">
			<Anton />
		</PageWrapper>
	);
};

export default React.memo(Root);
