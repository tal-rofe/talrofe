'use client';

import Link from 'next/link';
import React from 'react';

import { blogs } from '@/data/blogs';
import { formatDate } from '@/utils/date';
import { routes } from '@/routes/routes';

const getBlogParams = (path: string) => {
	return `${routes.blog.path}/${path}`;
};

const Blogs = () => {
	return blogs.map((blog, index) => (
		<div key={index} className="mb-14 flex flex-col items-start">
			<Link
				className="border-b-2 border-transparent pb-1 text-3xl font-bold text-foreground hover:border-b-foreground sm:pb-2"
				href={getBlogParams(blog.path)}
			>
				{blog.title}
			</Link>
			<span className="mb-4 mt-2 text-lg text-gray-400 sm:mb-6 sm:mt-4 sm:text-2xl">{blog.description}</span>
			<div className="flex items-center gap-2">
				<span className="text-base text-gray-400">{formatDate(blog.date)}</span>
				<span className="text-base text-gray-400">&minus;</span>
				<span className="text-base text-gray-400">{blog.readingTime}</span>
			</div>
		</div>
	));
};

export default React.memo(Blogs);
