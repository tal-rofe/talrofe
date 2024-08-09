'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavElement as NavElementType } from '../../../lib/types/ui/navigation';
import { routes } from 'src/lib/routes/routes';

const NavElement = (props: NavElementType) => {
	const pathname = usePathname();
	const isActive = pathname.includes(props.path);

	if (props.path === routes.home.path) {
		return (
			<Link href={props.path} className={`px-4 py-2`}>
				<span className="text-3xl font-bold text-foreground">{pathname === routes.home.path ? props.icon : 'Tal Rofe'}</span>
			</Link>
		);
	}

	return (
		<Link href={props.path} className={`border-b-2 px-4 py-2 ${isActive && !props.icon ? 'border-b-green-500' : 'border-b-transparent'}`}>
			<span className="text-xl text-accent-foreground">{props.icon ?? props.label}</span>
		</Link>
	);
};

export default React.memo(NavElement);
