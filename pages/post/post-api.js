import api, { getAwesomeData } from '../api/post';

const PostApi = ({ data }) => {
	console.log('postApi Client', data);

	return (
		<>
			<div>Page: post/api/{data.awe}</div>
		</>
	);
};

export const getStaticProps = async () => {
	// Error!
	// const res = await fetch('http://localhost:3000/api/post');
	const data = await getAwesomeData();
	console.log('GET DATA!', data, data?.awe);

	return {
		props: {
			data,
		},
	};
};

export default PostApi;
