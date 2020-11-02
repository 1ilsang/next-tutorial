import comments from "./comments.json";

export default (req, res) => {
  res.json({ post: req.query.id, comments });
};