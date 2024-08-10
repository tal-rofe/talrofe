import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		pre: ({ children }) => <pre className="my-3 w-min border border-solid border-neutral-300 bg-slate-950 p-3">{children}</pre>,
		h3: ({ children }) => <h3 className="my-2 text-3xl font-bold">{children}</h3>,
		h5: ({ children }) => <h5 className="my-2 text-lg font-bold">{children}</h5>,
		...components,
	};
}
