import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Intro = () => {
	return (
		<div className="flex h-full flex-col items-center">
			<Image src={'/images/profile.jpg'} alt="Profile Picture" width={150} height={150} className="mb-10 rounded-full" />
			<h1 className="bg-300% animate-gradient font-heading h-16 bg-gradient-to-r from-orange-700 via-blue-500 to-green-500 bg-clip-text text-center text-5xl font-bold text-transparent sm:h-24 sm:text-7xl">
				Tal Rofe
			</h1>
			<span className="text-center text-xl text-gray-400 sm:text-3xl">Full-Time cheese developer</span>
			<div className="mt-4 flex items-center gap-4 sm:mt-6">
				<Link
					href="https://google.com"
					className="rounded-full bg-slate-500 px-3 py-1 text-lg text-white hover:bg-slate-600 sm:px-8 sm:py-3 sm:text-xl"
				>
					Github
				</Link>
				<Link
					href="https://google.com"
					className="rounded-full bg-blue-800 px-3 py-1 text-lg text-white hover:bg-blue-950 sm:px-8 sm:py-3 sm:text-xl"
				>
					LinkedIn
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Intro);
