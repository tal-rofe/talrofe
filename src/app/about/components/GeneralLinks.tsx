import React from 'react';
import Link from 'next/link';

import { generalLinks } from '@/data/external-link';

const GeneralLinks = () => {
	return (
		<div className="flex flex-col">
			<h2 className="mb-4 text-4xl font-bold text-foreground">Others</h2>
			{generalLinks.map((generalLink) => (
				<Link
					key={generalLink.url}
					href={generalLink.url}
					className="mb-3 w-fit text-xl underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px]"
				>
					<span>{generalLink.label}</span>
				</Link>
			))}
		</div>
	);
};

export default React.memo(GeneralLinks);
