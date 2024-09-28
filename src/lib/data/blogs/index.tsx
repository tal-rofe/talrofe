import type { Blog } from '@/types/ui/blog';

import SingletonDesignPatternUseCaseWithNodeJsTypescriptExpressJsMdx from './content/singleton-design-pattern-use-case-with-node-js-typescript-express-js.mdx';
import CompilingAnElectronApplicationToPreDefinedOsMdx from './content/compiling-an-electron-application-to-pre-defined-os.mdx';
import ReactCreateYoutubeLikeLoaderWhenRoutingWithoutScreenFlickering from './content/react-create-youtube-like-loader-when-routing-without-screen-flickering.mdx';
import UtilizeTorNetworkToGetFreeProxyForAnyUseCase from './content/utilize-tor-network-to-get-free-proxy-for-any-use-case.mdx';

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
		description: 'This article shows how to compile an Electron application to OS code',
		date: new Date('2021-11-20'),
		readingTime: '10 min read',
		contentElement: <CompilingAnElectronApplicationToPreDefinedOsMdx />,
	},
	{
		path: 'react-create-youtube-like-loader-when-routing-without-screen-flickering',
		title: 'React: Create YouTube-like loader when routing without screen flickering',
		description: 'Create page-transition loader, including async data fetching',
		date: new Date('2023-04-27'),
		readingTime: '10 min read',
		contentElement: <ReactCreateYoutubeLikeLoaderWhenRoutingWithoutScreenFlickering />,
	},
	{
		path: 'utilize-tor-network-to-get-free-proxy-for-any-use-case',
		title: 'Utilize TOR network to get free proxy for any use case',
		description: 'Create many proxies for any use case using the TOR network, with GitHub API use case',
		date: new Date('2023-09-28'),
		readingTime: '10 min read',
		contentElement: <UtilizeTorNetworkToGetFreeProxyForAnyUseCase />,
	},
].sort((a, b) => b.date.getTime() - a.date.getTime());
