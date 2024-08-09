import { RoutesPath } from './route';

export type NavElement = {
	readonly label: string;
	readonly path: RoutesPath;
	readonly icon?: string;
};
