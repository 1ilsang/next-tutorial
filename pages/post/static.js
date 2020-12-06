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

// 브라우저 용 JS 번들에도 포함되지 않는다.
// 즉, 브라우저로 보내지 않고도 직접 데이터베이스 쿼리와 같은 코드를 작성할 수 있다.
// dev 모드일 땐 모든 요청에 대해서 실행되지만 product 는 build 타임에서 한 번 실행 된다.
// 또한 pages 밑의 요소에서만 가능하다! 이유 중 하나는 페이지가 렌더링되기 전에 React가 필요한 모든 데이터를 가져야하기 때문
// 그러므로 정적생산은 요청이 달라져야 한다면 좋은 방식이 아니다. -> SSR 로 변경하셈!
// getStaticProps 와 getServerSideProps 는 동시에 사용할 수 없다.
export const getStaticProps = async () => {
	// 오직 서버 측에서만 실행된다.
	if (typeof window !== 'undefined') {
		console.log('client!');
	}
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
	};
};

export default StaticProp;
