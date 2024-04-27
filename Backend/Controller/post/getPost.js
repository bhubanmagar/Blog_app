const mongoose = require("mongoose");
const getallPost = async (req, res) => {
  try {
    const post = mongoose.model("post");
    const response = await post.find().sort({ _id: -1 });
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    return res.status(400).send({
      stattus: "failed",
      message: error.message,
    });
  }
};
module.exports = getallPost;
