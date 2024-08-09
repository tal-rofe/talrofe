import React from 'react';

const Into = () => {
	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-foreground sm:text-7xl">About Tal Rofe</h2>
			<p className="my-10 text-lg sm:text-xl">
				I’m a software developer and open-sourcerer. I mostly code JavaScript.
				<br />I consult small-size startups with technology design or issues.
			</p>
		</div>
	);
};

export default React.memo(Into);
