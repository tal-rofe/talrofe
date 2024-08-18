'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { getSampleArcs } from '@/utils/globe';
import { UIGradientText } from '@/ui/UIGradientText';

const UIGlobe = dynamic(() => import('@/ui/UIGlobe').then((m) => m.World), {
	ssr: false,
});

const Contact = () => {
	const { theme } = useTheme();

	const globeConfig = {
		pointSize: 4,
		globeColor: theme === 'dark' ? '#062056' : '#b8e1ff',
		showAtmosphere: true,
		atmosphereColor: theme === 'dark' ? '#FFFFFF' : '#9ee5ff',
		atmosphereAltitude: 0.1,
		emissive: theme === 'dark' ? '#062056' : '#b8e1ff',
		emissiveIntensity: 0.1,
		shininess: 0.9,
		polygonColor: theme === 'dark' ? 'rgba(255,255,255,0.7)' : '#14532d',
		ambientLight: theme === 'dark' ? '#38bdf8' : '#62d0ff',
		directionalLeftLight: '#ffffff',
		directionalTopLight: '#ffffff',
		pointLight: '#ffffff',
		arcTime: 1000,
		arcLength: 0.9,
		rings: 1,
		maxRings: 3,
		initialPosition: { lat: 22.3193, lng: 114.1694 },
		autoRotate: true,
		autoRotateSpeed: 0.5,
	};

	return (
		<>
			<h1 className="mb-5 text-5xl font-bold text-slate-700 dark:text-slate-300 sm:text-7xl md:text-nowrap">Contact</h1>
			<Link href="mailto:talrofe111@gmail.com" className="group relative z-30 inline-block w-min">
				<UIGradientText as="h2" className="h-8 w-min text-2xl sm:h-12 sm:text-4xl">
					talrofe111@gmail.com
				</UIGradientText>
			</Link>

			<div className="absolute bottom-6 z-10 h-[450px] w-full sm:-bottom-10 sm:h-[700px]">
				<UIGlobe key={theme} data={getSampleArcs(theme ?? 'dark')} globeConfig={globeConfig} />
			</div>
		</>
	);
};

export default React.memo(Contact);
