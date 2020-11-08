import Link from 'next/link';

const preview = ({ id, previewData }) => {
	console.log('redirect preview!', previewData);
	return (
		<div>
			<h1>Preview ID: {id}</h1>
			<div>This is PreviewData Area: {previewData?.comments[0]?.comment}</div>
		</div>
	);
};

// 대표적인 사용처: 블로그 등에서 md 파일 추출해 url 만들어 줄 때
export const getStaticPaths = () => {
	const paths = [
		// { params: { name: 'user', id: '100' } },
		// { params: { id: '101' } },
	]; // 지정된 경로만 pre렌더링.
	return {
		paths,
		fallback: true, // true 면 다른 dynamic path 도 허용 false 면 404
	};
};

export const getStaticProps = async ({
	params,
	preview = false,
	previewData = null,
}) => {
	console.log(
		`/comment/preview/redirect/${params.id} context:`,
		preview,
		previewData
	);
	return {
		props: { id: params.id, previewData },
	};
};

export default preview;
