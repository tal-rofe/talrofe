import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';

import Contact from './components/Contact';

const ContactPage = () => {
	return (
		<PageWrapper>
			<Contact />
		</PageWrapper>
	);
};

export default React.memo(ContactPage);
