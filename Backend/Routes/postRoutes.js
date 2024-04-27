const express = require("express");
const auth = require("../middleware/auth");
const updatePost = require("../Controller/post/updatePost");
const deletePost = require("../Controller/post/deletePost");
const getallPost = require("../Controller/post/getPost");
const viewPost = require("../Controller/post/viewPost");
const postRoutes = express.Router();

postRoutes.get("/allPost", getallPost);
postRoutes.get("/view/:id", viewPost);

//proteced routes

postRoutes.use(auth);
postRoutes.patch("/update-blog/:id", updatePost);
postRoutes.delete("/delete-blog/:id", deletePost);

module.exports = postRoutes;
