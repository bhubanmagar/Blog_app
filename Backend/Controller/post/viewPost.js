const { mongoose } = require("mongoose");

const viewPost = async (req, res) => {
  const getId = req.params.id;
  const post = mongoose.model("post");
  try {
    const response = await post.findById({
      _id: getId,
    });

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
module.exports = viewPost;
