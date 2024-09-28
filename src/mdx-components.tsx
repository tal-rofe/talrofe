import type { MDXComponents } from 'mdx/types';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from 'next-themes';

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	const { theme } = useTheme();

	return {
		img: ({ src }) => <img className="my-3" src={src} />,

		code: ({ children, className }) => {
			const match = /language-(\w+)/.exec(className || '');

			return match ? (
				<SyntaxHighlighter style={theme === 'dark' ? oneDark : oneLight} PreTag="div" language={match[1]}>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<code className={className}>{children}</code>
			);
		},

		h1: ({ children }) => <h1 className="my-2 text-5xl font-bold">{children}</h1>,
		h2: ({ children }) => <h2 className="my-2 text-4xl font-bold">{children}</h2>,
		h3: ({ children }) => <h3 className="my-2 text-3xl font-bold">{children}</h3>,
		h4: ({ children }) => <h4 className="my-2 text-2xl font-bold">{children}</h4>,
		h5: ({ children }) => <h5 className="my-2 text-xl font-bold">{children}</h5>,

		hr: () => <hr className="my-4 h-1 w-52 self-center rounded-md border-none bg-stone-400" />,

		a: ({ children, href }) => (
			<a href={href} className="underline hover:text-sky-700">
				{children}
			</a>
		),

		ul: ({ children }) => <ul className="my-3 ms-5 list-disc">{children}</ul>,

		...components,
	};
};
