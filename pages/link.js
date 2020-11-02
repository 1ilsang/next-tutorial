import Link from 'next/link';
import Layout from '../components/Layout';

const link = () => {
	const id = 'test';

	return (
		<>
			<Layout>
				<h1>Link Test</h1>
				<div>
					{/* 10버전 이전엔 href="/post/solved/[id]" as={`/post/solved/${id}`} 이렇게 해주어야 했던 것이 통일 되었다. 정말 '마스크 링크'로 적용 중 */}
					<Link href={`/post/solved?id=${id}`} as={`/post/solved/${id}`}>
						Dynamic Link: as '/post/solved/test' to '/post/solved?id=test'
					</Link>
					<br />
					<Link href={`/post/solved?id=${id}`}>Just href</Link>
				</div>
				<div>
					<Link href={`/post/static`}>Post static href</Link>
					<br />
					<Link href={`/post/ssr`}>Post SSR href</Link>
					<br />
					<Link href={`/post/csr`}>Post CSR href</Link>
				</div>
			</Layout>
		</>
	);
};

export default link;
