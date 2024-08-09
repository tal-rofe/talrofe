import Link from 'next/link';
import React from 'react';

const SocialMedia = () => {
	return (
		<div className="mt-5 flex flex-col">
			<h2 className="mb-2 text-xl font-bold text-foreground sm:mb-4 sm:text-4xl">Links</h2>
			<Link
				target="_blank"
				href="https://linkedin.com/in/tal-rofe"
				className="mb-2 w-fit text-lg underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] sm:mb-3 sm:text-xl"
			>
				<span>LinkedIn</span>
			</Link>
			<Link
				target="_blank"
				href="https://github.com/tal-rofe"
				className="mb-2 w-fit text-lg underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] sm:mb-3 sm:text-xl"
			>
				<span>GitHub</span>
			</Link>
			<Link
				target="_blank"
				href="https://stackoverflow.com/users/9105207/tal-rofe"
				className="mb-2 w-fit text-lg underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] sm:mb-3 sm:text-xl"
			>
				<span>StackOverflow</span>
			</Link>
			<Link
				target="_blank"
				href="https://dev.to/talr98"
				className="w-fit text-lg underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] sm:mb-3 sm:text-xl"
			>
				<span>dev.to</span>
			</Link>
		</div>
	);
};

export default React.memo(SocialMedia);
