import React from 'react';
import { headerNavigationElemets } from '../../../lib/data/navigation';
import NavElement from './NavElement';

const Header = () => {
	return (
		<header className="flex w-full justify-between px-44 py-8">
			{headerNavigationElemets[0] && <NavElement {...headerNavigationElemets[0]} />}
			<div className="flex gap-10">
				{headerNavigationElemets.slice(1).map((navItem, index) => (
					<NavElement key={index} {...navItem} />
				))}
			</div>
		</header>
	);
};

export default React.memo(Header);
