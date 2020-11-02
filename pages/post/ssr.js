const SSR = ({ post, comment }) => {
	return (
		<div>
			<h1>SSR Title: {post.title}</h1>
			<p>SSR Content: {post.content}</p>
			{comment && <p>SSR Comment: {comment.comment}</p>}
		</div>
	);
};

export const getServerSideProps = async (context) => {
	console.log('SSR server side props hit!');

	if (typeof window !== 'undefined') console.log('SSG client mode!');
	const [mockRes, commentsRes] = await Promise.all([
		fetch('http://localhost:3030/mock'),
		fetch('http://localhost:3000/api/comment'),
	]);
	const post = await mockRes.json();
	const comments = await commentsRes.json();

	return {
		props: {
			post,
			comment: comments[1],
		},
	};
};

export default SSR;
