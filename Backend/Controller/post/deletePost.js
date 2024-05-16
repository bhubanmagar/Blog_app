const mongoose = require("mongoose");
const fs = require("fs");

const deletePost = async (req, res) => {
  const getId = req.params.id;
  const post = mongoose.model("post");
  try {
    const data = await post.findById({ _id: getId });
    console.log(data);
    fs.unlinkSync(data.image);
    await post.findByIdAndDelete({ _id: getId });
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
