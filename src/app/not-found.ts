import { redirect } from 'next/navigation';

const NotFoundCatchAll = () => {
	redirect('/');
};

export default NotFoundCatchAll;
