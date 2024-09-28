import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { UIGradientText } from '@/ui/UIGradientText';
import { UIHoverBorderGradient } from '@/ui/UIHoverBorderGradient';

const Intro = () => {
	return (
		<div className="flex h-full flex-col items-center">
			<UIHoverBorderGradient
				containerClassName="rounded-full"
				as="div"
				className="z-20 flex items-center justify-center bg-white p-0 text-black dark:bg-black dark:text-white"
			>
				<Image src="/images/profile.jpg" alt="Profile Picture" width="150" height="150" className="rounded-full" />
			</UIHoverBorderGradient>
			<UIGradientText as="h1">Tal Rofe</UIGradientText>

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

			<a className="my-5" href="https://app.daily.dev/talr98">
				<img src="https://api.daily.dev/devcards/v2/1ly2oYyRY0SZ2r7lGr5dI.png?r=qkb&type=wide" width="400" alt="Tal Rofe's Dev Card" />
			</a>
		</div>
	);
};

export default React.memo(Intro);
