const mongoose = require("mongoose");
const deletePost = async (req, res) => {
  const getId = req.params.id;
  const post = mongoose.model("post");

  try {
    await post.deleteOne({ _id: getId });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }

  res.status(200).json({
    status: "sucessfull",
    message: "deleted sucessfully",
  });
};
module.exports = deletePost;
