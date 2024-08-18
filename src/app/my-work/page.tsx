'use client';

import React from 'react';

import PageWrapper from '@/wrappers/PageWrapper';
import { UIGradientText } from '@/ui/UIGradientText';

import MyWork from './components/MyWork';

const MyWorkPage = () => {
	return (
		<PageWrapper className="max-w-[1300px]">
			<div className="mb-5 flex items-center justify-center gap-3 lg:mb-10">
				<h1 className="h-14 text-nowrap text-center text-3xl font-bold text-foreground text-slate-700 dark:text-slate-300 sm:text-5xl lg:h-24 lg:text-7xl">
					Quality crafted
				</h1>
				<UIGradientText className="h-14 w-fit sm:h-14 sm:text-5xl lg:h-24 lg:text-7xl">Work</UIGradientText>
			</div>
			<MyWork />
		</PageWrapper>
	);
};

export default React.memo(MyWorkPage);
