import type { Blog } from '@/types/ui/blog';

import SingletonDesignPatternUseCaseWithNodeJsTypescriptExpressJsMdx from './content/singleton-design-pattern-use-case-with-node-js-typescript-express-js.mdx';
import CompilingAnElectronApplicationToPreDefinedOsMdx from './content/compiling-an-electron-application-to-pre-defined-os.mdx';

export const blogs: Blog[] = [
	{
		path: 'singleton-design-pattern-use-case-with-node-js-typescript-express-js',
		title: 'Singleton design pattern use case with Node.js (TypeScript) + Express.js',
		description: 'This article shows a use case of singleton design pattern',
		date: new Date('2021-08-21'),
		readingTime: '10 min read',
		contentElement: <SingletonDesignPatternUseCaseWithNodeJsTypescriptExpressJsMdx />,
	},
	{
		path: 'compiling-an-electron-application-to-pre-defined-os',
		title: 'Compiling an Electron application code only to the underlying OS code',
		description: 'This article shows how to compile an Electron application to OS code, ',
		date: new Date('2021-11-20'),
		readingTime: '10 min read',
		contentElement: <CompilingAnElectronApplicationToPreDefinedOsMdx />,
	},
];
