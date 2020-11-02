import comments from './comments.json';

export default (req, res) => {
  console.log('Server path "/comments" hit!', comments);
  res.json(comments);
}