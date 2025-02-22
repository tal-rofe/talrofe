import icons from '@/assets/icons';
import { RoutesPath } from './route';

export type NavElement = {
	readonly path: RoutesPath;
	readonly label: string;
	readonly icon?: keyof typeof icons;
};
