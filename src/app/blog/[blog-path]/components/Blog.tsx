'use client';

import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

import { blogs } from '@/data/blogs';
import { formatDate } from '@/utils/date';

const Blog = () => {
	const params = useParams();

	const blogPath = Array.isArray(params?.['blog-path']) ? params['blog-path'][0] : params?.['blog-path'];

	const blog = useMemo(() => {
		return blogs.find((blog) => blog.path === blogPath);
	}, [blogPath]);

	if (!blog) {
		return <div>Blog not found</div>;
	}

	return (
		<div className="flex flex-col items-center">
			<div className="mb-3 flex items-center gap-3">
				<span className="text-gray-400">{formatDate(blog.date)}</span>
				<span className="text-gray-400">&minus;</span>
				<span className="text-gray-400">{blog.readingTime}</span>
			</div>
			<h2 className="mb-3 text-5xl font-bold">{blog.title}</h2>
			<span className="mb-10 max-w-[600px] text-center text-xl text-gray-400">{blog.description}</span>
			<ReactMarkdown remarkPlugins={[remarkGfm]} className="prose prose-xl dark:prose-invert">
				{blog.content}
			</ReactMarkdown>
		</div>
	);
};

export default React.memo(Blog);
