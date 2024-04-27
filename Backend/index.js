const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const Connect = require("./middleware/dbConnect");
const userRoutes = require("./Routes/myRoutes");
const blogRoutes = require("./Routes/postRoutes");

//initialization of express app
const app = express();
app.use(express.json());
require("dotenv").config();
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
const mongo_connect = process.env.MONGO_URI;

Connect(mongo_connect); //database connection
require("./models/userModel"); //for creating user model
require("./models/postModel");

//Routes
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
//making storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/images/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

//adding image using multer
app.post("/blog/createBlog", upload.single("image"), async function (req, res) {
  const post = mongoose.model("post");
  const { tittle, content } = req.body;
  const image = req.file.filename;

  //field empty check
  if (!tittle || !content || !image) {
    return res.status(400).json({
      status: "failed",
      message: "field can't be empty",
    });
  }
  try {
    await post.create({
      tittle: tittle,
      content: content,
      user_id: req.user._id,
      image: `http://localhost:8000/images/${image}`,
    });
  } catch (error) {
    return console.log(error.message);
  }

  res.status(200).json({
    message: "added sucessfully",
  });
}); //create post route ends here

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at ${port}  `);
});
