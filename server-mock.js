const express = require('express');
const app = express();

app.all('/*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	next();
});

app.get('/mock', (req, res) => {
	console.log('Hit mock server!', '/mock');
	res.json({ title: 'Mock', content: 'This is mock data.' });
	// res.json({ title: 'Mock-revalidate', content: 'This is revalidate data.' });
	// res.send({});
});

app.listen(3030, (err) => {
	if (err) throw err;
	console.log('Mock server is running... 3030');
});
