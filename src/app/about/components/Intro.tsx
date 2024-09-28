import React from 'react';

const Into = () => {
	return (
		<div className="flex flex-col">
			<h2 className="text-6xl font-bold text-foreground">About Tal Rofe</h2>
			<p className="my-10 text-lg sm:text-xl">
				I’m a software developer and open-sourcerer. I mostly code JavaScript.
				<br />I consult small-size startups with technology design or issues.
			</p>

			<div className="sm:gap3 flex flex-col sm:flex-row sm:items-center">
				<a href="https://app.daily.dev/talr98" target="_blank">
					<img
						className="w-[70vw] sm:w-[350px]"
						src="https://api.daily.dev/devcards/v2/1ly2oYyRY0SZ2r7lGr5dI.png?r=qkb&type=wide"
						alt="Tal Rofe's Dev Card"
					/>
				</a>

				<a className="mx-0 mt-4 sm:mx-4 sm:mt-0" href="https://stackoverflow.com/users/9105207/tal-rofe" target="_blank">
					<img className="w-[70vw] sm:w-[395px]" src="https://stackoverflow-card.vercel.app/?userID=9105207&theme=dracula" alt="" />
				</a>
			</div>
		</div>
	);
};

export default React.memo(Into);
