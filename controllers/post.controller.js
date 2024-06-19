const { where } = require("sequelize");
const models = require("../models");

function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
    userId: 1,
  };
  models.Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully.",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!!!",
        error: error,
      });
    });
}

function show(req, res) {
  const id = req.params.id;
  models.Post.findByPk(id)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!!!",
        error: error,
      });
    });
}

function index(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!!!",
        error: error,
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatePost = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
  };

  const userId = 1;

  models.Post.update(updatePost, { where: { id: id, userId: userId } })
    .then((result) => {
      res.status(200).json({
        message: "Post updated successfully.",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!!!",
        error: error,
      });
    });
}
function destroy(req, res) {
  const id = req.params.id;
  const userId = 1;

  models.Post.destroy({ where: { id: id, userId: userId } })
    .then((result) => {
      res.status(200).json({
        message: "Post deleted successfully.",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!!!",
        error: error,
      });
    });
}

module.exports = {
  save,
  show,
  index,
  update,
  destroy,
};
