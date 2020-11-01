const next = require('next');
const app = next({ dev: process.env.NODE_ENV === 'production' });
const express = require('express');
const handle = app.getRequestHandler();
const PORT = 3000;

app.prepare().then(() => {
  const server = express();
  
  server.get('/mask/:id', (req, res) => {
    console.log('hit server!', req.params.id);
    const actualPage = '/mask';
    const queryParas = { id: req.params.id };
    app.render(req, res, actualPage, queryParas);
  });

  server.get('*', (req, res) => {
    console.log('req:', req.path);
    handle(req, res);
  });

  server.listen(PORT, err => {
    if(err) throw err;
    console.log('Server is running...!', PORT);
  });
}).catch(e => {
  console.error(e);
  process.exit(1);
});