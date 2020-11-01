import comments from './comments.json';

export default (req, res) => {
	const defaultValues = {
		comments,
		headers: req.headers,
		query: req.query,
		cookies: req.cookies,
		body: req.body,
	};

	switch (req.method) {
		case 'GET':
			res.json({ ...defaultValues, method: 'GET' });
			break;
		case 'POST':
			res.json({ ...defaultValues, method: 'POST' });
			break;
		default:
			res.status(405).end(); // Method Not Allowed
			break;
	}
};
