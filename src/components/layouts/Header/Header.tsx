'use client';

import React from 'react';
import { headerNavigationElemets } from '../../../lib/data/navigation';
import NavElement from './NavElement';
import { useTheme } from 'next-themes';

const Header = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	return (
		<header className="flex w-full items-center justify-center px-2 py-4 sm:px-6">
			<div className="flex w-full max-w-[1300px] items-center justify-between">
				{headerNavigationElemets[0] && <NavElement {...headerNavigationElemets[0]} />}

				<div className="flex gap-1 sm:gap-10">
					{headerNavigationElemets.slice(1).map((navItem, index) => (
						<NavElement key={index} {...navItem} />
					))}
					<button type="button" onClick={toggleTheme}>
						<span className="text-xl">{theme === 'dark' ? '🌞' : '🌚'}</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default React.memo(Header);
