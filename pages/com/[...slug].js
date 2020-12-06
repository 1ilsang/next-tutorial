import { useRouter } from 'next/router';

const com = () => {
	return <div>com</div>;
};

// 대표적인 사용처: 블로그 등에서 md 파일 추출해 url 만들어 줄 때
export const getStaticPaths = () => {
	const paths = [{ params: { name: 'user', slug: ['100', '101'] } }]; // 지정된 경로만 pre렌더링.
	return {
		paths,
		fallback: true, // true 면 다른 dynamic path 도 허용 false 면 404
	};
};

export const getStaticProps = (context) => {
	// console.log('/post/[id] context:', context);
	console.log('com/...slug', context);
	return {
		props: {},
	};
};

export default com;
