const mongoose = require("mongoose");

const updatePost = async (req, res) => {
  const post = mongoose.model("post");
  const { tittle, content } = req.body;
  const getId = req.params.id;
  console.log(getId);

  try {
    await post.updateOne(
      {
        _id: getId,
      },
      {
        tittle: tittle,
        content: content,
      }
    );
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }

  res.status(200).json({
    message: "this is update route!",
  });
};

module.exports = updatePost;
