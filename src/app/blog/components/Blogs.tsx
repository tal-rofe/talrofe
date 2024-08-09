'use client';

import { blogs } from '@/data/blogs';
import { formatDate } from '@/utils/date';
import Link from 'next/link';
import React from 'react';
import { routes } from 'src/lib/routes/routes';

const Blogs = () => {
	const getBlogParams = (path: string) => {
		return `${routes.blog.path}/${path}`;
	};

	return blogs.map((blog, index) => (
		<div key={index} className="mb-14 flex flex-col items-start">
			<Link
				className="border-b-2 border-transparent pb-1 text-2xl font-bold text-foreground hover:border-b-foreground sm:pb-2 sm:text-5xl"
				href={getBlogParams(blog.path)}
			>
				{blog.title}
			</Link>
			<span className="mb-4 mt-2 text-lg text-gray-400 sm:mb-6 sm:mt-4 sm:text-2xl">{blog.description}</span>
			<div className="flex items-center gap-2">
				<span className="text-base text-gray-400 sm:text-xl">{formatDate(blog.date)}</span>
				<span className="text-base text-gray-400 sm:text-xl">&minus;</span>
				<span className="text-base text-gray-400 sm:text-xl">{blog.readingTime}</span>
			</div>
		</div>
	));
};

export default React.memo(Blogs);
