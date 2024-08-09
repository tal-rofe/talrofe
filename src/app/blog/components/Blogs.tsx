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
			<Link className="border-b-2 border-transparent pb-2 text-5xl font-bold hover:border-b-foreground" href={getBlogParams(blog.path)}>
				{blog.title}
			</Link>
			<span className="mb-6 mt-4 text-2xl text-gray-400">{blog.description}</span>
			<div className="flex items-center gap-2">
				<span className="text-xl text-gray-400">{formatDate(blog.date)}</span>
				<span className="text-xl text-gray-400">&minus;</span>
				<span className="text-xl text-gray-400">{blog.readingTime}</span>
			</div>
		</div>
	));
};

export default React.memo(Blogs);
