import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Intro = () => {
	return (
		<div className="flex h-full flex-col items-center">
			<Image src={'/images/profile.jpg'} alt="Profile Picture" width={150} height={150} className="mb-10 rounded-full" />
			<h1 className="bg-300% animate-gradient font-heading h-24 bg-gradient-to-r from-orange-700 via-blue-500 to-green-500 bg-clip-text text-7xl font-bold text-transparent">
				Tal Rofe
			</h1>
			<span className="text-center text-3xl text-gray-400">Full-Time cheese developer</span>
			<div className="mt-6 flex items-center gap-4">
				<Link href="https://google.com" className="rounded-full bg-slate-500 px-8 py-3 text-xl text-white hover:bg-slate-600">
					Github
				</Link>
				<Link href="https://google.com" className="rounded-full bg-blue-800 px-8 py-3 text-xl text-white hover:bg-blue-950">
					LinkedIn
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Intro);
