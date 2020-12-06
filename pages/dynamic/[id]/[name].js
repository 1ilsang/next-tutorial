import { useRouter } from 'next/router';

const Post = ({ id, name }) => {
	const { isFallback } = useRouter();

	// If fallback is 'blocking', It will doesn't work.
	if (isFallback) return <div>Loading...</div>;

	return (
		<div>
			dynamic/[id]/[name]: {id}/{name}
		</div>
	);
};

// 대표적인 사용처: 블로그 등에서 md 파일 추출해 url 만들어 줄 때
export const getStaticPaths = () => {
	const paths = [{ params: { name: 'user', id: '100' } }]; // 지정된 경로만 pre렌더링.
	return {
		paths,
		fallback: true, // true 면 다른 dynamic path 도 허용 false 면 404
		fallback: 'blocking', // true 면 다른 dynamic path 도 허용 false 면 404
	};
};

export const getStaticProps = ({ params }) => {
	const { name, id } = params;
	return {
		props: { id, name },
	};
};

export default Post;
