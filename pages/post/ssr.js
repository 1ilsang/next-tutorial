const SSR = ({ post, postApi }) => {
	return (
		<div>
			<h1>SSR Title: {post.title}</h1>
			<p>SSR Content: {post.content}</p>
			{postApi && <p>SSR postApi: {postApi.awe}</p>}
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const {
		req,
		res,
		params,
		query,
		preview,
		previewData,
		resolvedUrl,
		locale,
		locales,
		defaultLocale,
	} = context;
	console.log('SSR server side props hit!', resolvedUrl, query, locale);

	if (typeof window !== 'undefined') console.log('SSG client mode!');
	const [mockRes, postApiRes] = await Promise.all([
		fetch('http://localhost:3030/mock'),
		fetch('http://localhost:3000/api/post'),
	]);
	const post = await mockRes.json();
	const postApi = (await postApiRes.json()).data;

	return {
		props: {
			post,
			postApi,
		},
	};
};

export default SSR;
