import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';

import Contact from './components/Contact';

const ContactPage = () => {
	return (
		<PageWrapper className="flex flex-col items-center" wrapperClassName="pt-28">
			<Contact />
		</PageWrapper>
	);
};

export default React.memo(ContactPage);
