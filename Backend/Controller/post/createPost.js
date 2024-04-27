// const mongoose = require("mongoose");

// const createPost = async (req, res) => {
//   const { tittle, content, image } = req.body;
//   const Post = mongoose.model("post");

//   try {
//     const response = await Post.create({
//       tittle: tittle,
//       content: content,
//       user_id: req.user._id,
//       image: image,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "failed",
//       message: error.message,
//     });
//   }

//   res.status(200).json({
//     message: "SuccesFully created Post",
//   });
// };

// module.exports = createPost;

//multer file handle garna le index file nai call gareko xa createPost handler
