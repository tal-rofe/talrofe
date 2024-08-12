import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdStars } from 'react-icons/md';

import { workItems } from '../data/work-items';

const MyWork = () => {
	return (
		<div className="mx-auto grid grid-cols-1 dark:text-white sm:gap-12 sm:p-1 lg:grid-cols-2">
			{workItems.map((workItem, index) => (
				<Link
					key={index}
					href={workItem.link}
					target="_blank"
					className="relative flex items-center bg-white px-2 py-6 shadow-md transition duration-500 hover:shadow-xl dark:border-slate-800 dark:bg-black/20 dark:shadow-lg sm:rounded-xl sm:p-6 dark:sm:border dark:hover:sm:shadow-indigo-500/20"
				>
					{workItem.isHighlighted && <MdStars size="40" className="absolute -left-4 -top-4" />}
					{workItem.imageFileName && (
						<div className="mr-2 flex-initial flex-shrink-0 justify-center sm:mr-3">
							<Image className="rounded-lg" src={`/images/${workItem.imageFileName}`} width="75" height="75" alt={workItem.title} />
						</div>
					)}
					<div className="my-3 mr-2 flex flex-col justify-center sm:mt-[-1px]">
						<h3 className="mb-0.5 text-2xl font-bold sm:text-3xl">{workItem.title}</h3>
						<p className="text-lg leading-tight text-gray-700 dark:text-gray-200/90 sm:text-xl sm:leading-tight">
							{workItem.description}
						</p>
						<div className="mt-3 flex flex-wrap gap-1.5 opacity-90 sm:mt-3">
							{workItem.metadata.map((metadataLink, innerIndex) => (
								<img key={`${index}#${innerIndex}`} src={metadataLink} alt="npm downloads" className="h-5 w-auto" />
							))}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default React.memo(MyWork);
