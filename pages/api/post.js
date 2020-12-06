const getData = async () => Promise.resolve({ awe: 'some' });

const handler = async (req, res) => {
	const data = await getData();
	res.json({ data });
};

export const getAwesomeData = async () => {
	return await getData();
};

export default handler;
