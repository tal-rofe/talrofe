import BaseLayout from '@/layouts/BaseLayout';

type Props = {
	readonly children: React.ReactNode;
};

const BlogLayout = (props: Props) => {
	return <BaseLayout>{props.children}</BaseLayout>;
};

export default BlogLayout;
