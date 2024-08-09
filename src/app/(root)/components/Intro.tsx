import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';

const Intro = () => {
	return (
		<div className="flex h-full flex-col items-center">
			<Image src="/images/profile.jpg" alt="Profile Picture" width="150" height="150" className="mb-10 rounded-full" />
			<h1 className="bg-300% font-heading h-16 animate-gradient bg-gradient-to-r from-orange-700 via-blue-500 to-green-500 bg-clip-text text-center text-5xl font-bold text-transparent sm:h-24 sm:text-7xl">
				Tal Rofe
			</h1>
			<span className="text-center text-xl text-gray-400 sm:text-3xl">Software Developer & Open-Sourcerer</span>
			<div className="mt-4 flex items-center gap-4 sm:mt-6">
				<Link
					href="https://github.com/tal-rofe"
					target="_blank"
					className="flex items-center rounded-full bg-slate-500 px-3 py-1 text-lg text-white hover:bg-slate-600 sm:px-8 sm:py-3 sm:text-xl"
				>
					<IoLogoGithub />
					<span className="ms-2">GitHub</span>
				</Link>
				<Link
					href="https://linkedin.com/in/tal-rofe"
					target="_blank"
					className="flex items-center rounded-full bg-blue-800 px-3 py-1 text-lg text-white hover:bg-blue-950 sm:px-8 sm:py-3 sm:text-xl"
				>
					<IoLogoLinkedin />
					<span className="ms-2">LinkedIn</span>
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Intro);
