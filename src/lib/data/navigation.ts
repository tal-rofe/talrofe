import type { NavElement } from '@/types/ui/navigation';
import { routes } from '../routes/routes';

export const headerNavigationElements: NavElement[] = [
	{
		label: routes.home.title,
		path: routes.home.path,
	},
	{
		label: routes.about.title,
		path: routes.about.path,
	},
	{
		label: routes.myWork.title,
		path: routes.myWork.path,
	},
	{
		label: routes.blog.title,
		path: routes.blog.path,
	},
	{
		label: routes.contact.title,
		path: routes.contact.path,
		icon: 'contact',
	},
];
