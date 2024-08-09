import { socialMedia } from '@/data/external-link';
import Link from 'next/link';
import React from 'react';

const SocialMedia = () => {
	return (
		<div className="mt-10 flex flex-col">
			<h2 className="mb-4 text-4xl font-bold text-foreground">Links</h2>
			{socialMedia.map((socialMedia) => (
				<Link
					key={socialMedia.url}
					href={socialMedia.url}
					className="mb-3 w-fit text-xl underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px]"
				>
					<span>{socialMedia.label}</span>
				</Link>
			))}
		</div>
	);
};

export default React.memo(SocialMedia);
