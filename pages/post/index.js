import { useRouter } from 'next/router';
import posts from '../posts.json';

const Post = () => {
	const router = useRouter();
	const post = posts[router.query.id];

	if (!post) return <p>포스트가 없어요</p>; // 임시 처리
	// 렌더링 도중 데이터가 없기 때문에 위의 라인이 없으면 에러가 생김(undefined 에 접근)

	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</>
	);
};

export default Post;
