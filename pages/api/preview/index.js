import comments from '../comment/comments.json';

export default (req, res) => {
	console.log('hit preview', req.query.secret);
	res.setPreviewData({ comments, qId: req.query.id }, { maxAge: 10 });
	res.writeHead(307, { Location: `/comment/preview/${req.query.id}` });
	res.end('Preview mode enabled');
};
