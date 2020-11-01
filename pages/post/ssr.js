const SSR = ({ post }) => {
	return (
		<div>
			<h1>SSR Title: {post.title}</h1>
			<p>SSR Content: {post.content}</p>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	if (typeof window !== 'undefined') console.log('SSG client mode!');
	const res = await fetch('http://localhost:3030/mock');
	const post = await res.json();
	console.log('SSR server side props hit!', post);

	return {
		props: {
			post,
		},
	};
};

export default SSR;
