import { UIGradienteText } from '@/ui/UIGradienteText';
import Link from 'next/link';
import React from 'react';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
	return (
		<div>
			<h2 className="mb-3 text-6xl font-bold text-foreground">Contact</h2>
			<div className="flex flex-row items-center">
				<IoIosMail className="mr-2" size="40" />
				<Link href="mailto:talrofe111@gmail.com" className="inline-block w-min">
					<UIGradienteText as="h2" className="h-8 w-min text-2xl sm:h-12 sm:text-4xl">
						talrofe111@gmail.com
					</UIGradienteText>
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Contact);
