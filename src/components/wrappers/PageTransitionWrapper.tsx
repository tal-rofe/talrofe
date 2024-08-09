'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Props = {
	readonly children: React.ReactNode;
};

const PageTransitionWrapper = (props: Props) => {
	return (
		<motion.div
			className="w-ful h-[calc(100%-76px)] overflow-y-auto"
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.75 }}
		>
			{props.children}
		</motion.div>
	);
};

export default React.memo(PageTransitionWrapper);
