const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      require: [true, "Tittle is required"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      format: "%Y-%m-%d",
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    image: {
      type: String,
      require: [true, "Image is required"],
      default:
        "https://eas-tech.net/wp-content/uploads/dummy-post-horisontal.jpg",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
