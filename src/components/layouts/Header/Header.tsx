'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { UISvg } from '@/ui/UISvg';
import { headerNavigationElements } from '@/data/navigation';
import NavElement from './NavElement';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
	const { theme, setTheme } = useTheme();
	const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);

	const onToggleHamburgerMenu = () => {
		setIsHamburgerMenuOpen((prev) => !prev);
	};

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<header className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-slate-100/70 px-8 py-4 backdrop-blur-md dark:bg-gray-900/70 sm:px-6">
			<div className="flex w-full max-w-[700px] items-center justify-between lg:max-w-[1400px]">
				{headerNavigationElements[0] && <NavElement className="z-20" {...headerNavigationElements[0]} />}

				<div className="hidden items-center gap-3 sm:flex sm:gap-8">
					{headerNavigationElements.slice(1).map((navItem, index) => (
						<NavElement key={index} {...navItem} />
					))}
					<button type="button" className="xxxs:block z-20 hidden" onClick={toggleTheme}>
						<span className="mb-1 text-xl">{theme === 'dark' ? '🌞' : '🌚'}</span>
					</button>
				</div>
				<UISvg
					name={isHamburgerMenuOpen ? 'cross' : 'hamburger'}
					className="z-20 block h-6 w-6 cursor-pointer sm:hidden"
					onClick={onToggleHamburgerMenu}
				/>
				<HamburgerMenu isOpen={isHamburgerMenuOpen} />
			</div>
		</header>
	);
};

export default React.memo(Header);
