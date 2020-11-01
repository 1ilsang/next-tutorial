import useSWR from 'swr';

const CSR = () => {
	const { data, error } = useSWR('http://localhost:3030/mock', (url) =>
		fetch(url).then((data) => data.json())
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const { title, content } = data;

	return (
		<div>
			<h1>CSR Title: {title}</h1>
			<p>CSR Content: {content}</p>
		</div>
	);
};

export default CSR;
