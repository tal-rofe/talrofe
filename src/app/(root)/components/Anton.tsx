'use client';

import { useTheme } from 'next-themes';
import React from 'react';

const Anton = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div>
			<button className="rounded bg-secondary px-4 py-2 text-primary hover:bg-secondary-foreground" onClick={toggleTheme}>
				Toggle Theme
			</button>
		</div>
	);
};

export default React.memo(Anton);
