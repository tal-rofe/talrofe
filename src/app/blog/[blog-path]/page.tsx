import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import { blogs } from '@/data/blogs';

import Blog from './components/Blog';

export function generateStaticParams() {
	return blogs.map((blog) => ({
		'blog-path': blog.path,
	}));
}

const BlogPage = () => {
	return (
		<PageWrapper className="flex justify-center">
			<Blog />
		</PageWrapper>
	);
};

export default React.memo(BlogPage);
