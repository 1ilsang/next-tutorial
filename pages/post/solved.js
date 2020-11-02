import posts from '../posts.json';

const Post = ({ post }) => {
	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</>
	);
};

// getInitialProps 는 클라이언트, 서버사이드 모두 실행 된다.
Post.getInitialProps = async ({ query }) => {
	if (typeof window === 'undefined') {
		console.log('server mode');
	} else {
		console.log('client mode');
	}
	const res = await fetch('http://localhost:3030/mock');
	const mock = await res.json();
	console.log('hit', mock);

	return {
		post: posts[query.id],
	};
};

export default Post;
