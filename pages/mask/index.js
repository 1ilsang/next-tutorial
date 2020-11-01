import { useRouter } from 'next/router';

const Mask = () => {
	const router = useRouter();

	return (
		<>
			<h1>Mask Index QueryId: {router.query.id}</h1>
		</>
	);
};

export default Mask;
