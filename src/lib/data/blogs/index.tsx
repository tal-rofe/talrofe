import type { Blog } from '@/types/ui/blog';

import SingletonDesignPatternUseCaseWithNodeJsTypescriptExpressJsMdx from './content/singleton-design-pattern-use-case-with-node-js-typescript-express-js.mdx';

export const blogs: Blog[] = [
	{
		path: 'singleton-design-pattern-use-case-with-node-js-typescript-express-js',
		title: 'Singleton design pattern use case with Node.js (TypeScript) + Express.js',
		description: 'This article shows a use case of singleton design pattern',
		date: new Date('2021-08-21'),
		readingTime: '10 min read',
		contentElement: <SingletonDesignPatternUseCaseWithNodeJsTypescriptExpressJsMdx />,
	},
];
