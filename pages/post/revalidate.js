import posts from '../posts.json';

const StaticProp = ({ post, mock }) => {
	return (
		<>
			<div>getStaticProps</div>
			<h1>Props Title: {post.title}</h1>
			<p>Props Content: {post.content}</p>
			<h2>
				Mock Data: {mock && mock.title}, {mock && mock.content}
			</h2>
		</>
	);
};

export const getStaticProps = async () => {
	// Get external data from the file system, API, DB, etc.
	const post = posts['test'];
	// 이때 서버가 떠 있어야 정상적인 빌드가 됨(데이터 가져와서 static.json 으로 말아줌)
	const res = await fetch('http://localhost:3030/mock');
	const mock = await res.json();

	return {
		props: {
			post,
			mock,
		},
		revalidate: 1,
	};
};

export default StaticProp;
