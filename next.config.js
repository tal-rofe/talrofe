import withMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	typescript: {
		tsconfigPath: './tsconfig.build.json',
	},
	compiler: {
		removeConsole: true,
		reactRemoveProperties: true,
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxConfig = {
	options: {
		remarkPlugins: [remarkGfm],
	},
};

const nextWithMdxConfigFn = withMDX(mdxConfig);

export default nextWithMdxConfigFn(nextConfig);
