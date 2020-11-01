import Link from 'next/link';
import Layout from '../components/Layout';

const link = () => {
	const id = 'test';

	return (
		<>
			<Layout>
				<div>
					<h1>Link Test</h1>
					{/* 10버전 이전엔 href="/mask/[id]" as={`/mask/${id}`} 이렇게 해주어야 했던 것이 통일 되었다. 정말 '마스크 링크'로 적용 중 */}
					<Link href={`/mask?id=${id}`} as={`/mask/${id}`}>
						Dynamic Link: as '/mask/test' to '/mask?id=test'
					</Link>
					<br />
					<Link href={`/mask?id=${id}`}>just href</Link>
				</div>
				<div>
					<Link href={`/post/solved?id=${id}`} as={`/post/solved/${id}`}>
						Dynamic Link: as '/mask/test' to '/mask?id=test'
					</Link>
					<br />
					<Link href={`/post/solved?id=${id}`}>Post href</Link>
					<br />
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
