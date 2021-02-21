const com = ({ slug }) => {
	if (!Array.isArray(slug)) return <h1>com</h1>;

	console.log('Slug:', slug);

	return (
		<>
			{slug.map((e, i) => (
				<h1>
					{i}: {e}
				</h1>
			))}
		</>
	);
};

export const getStaticPaths = () => {
	const paths = [
		{ params: { name: 'user', slug: ['100', '101'] } },
		// TODO: Exception issue - throw slug length is 0
		// { params: { name: 'user', slug: [] } },
	];
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = ({ params }) => {
	const { slug = null } = params;
	return {
		props: { slug },
	};
};

export default com;
