import React from 'react';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
	return (
		<div>
			<h2 className="mb-3 text-6xl font-bold text-foreground">Contact</h2>
			<div className="flex flex-row items-center">
				<IoIosMail className="mr-2" size="25" />
				<a className="text-lg" href="mailto:talrofe111@gmail.com">
					talrofe111@gmail.com
				</a>
			</div>
		</div>
	);
};

export default React.memo(Contact);
