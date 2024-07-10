import React from 'react';

const Header = () => {
	return (
		<header className="flex w-full justify-center border-4 px-2 py-4">
			<span>Yazif's header</span>
		</header>
	);
};

export default React.memo(Header);
