import React from 'react';
import type { NavElement } from '../../../lib/types/ui/navigation';
import Link from 'next/link';

const NavElement = (props: NavElement) => {
	return (
		<Link href={props.path} className="rounded px-4 py-2 hover:bg-secondary">
			<span className="text-xl text-accent-foreground">{props.icon ?? props.label}</span>
		</Link>
	);
};

export default React.memo(NavElement);
