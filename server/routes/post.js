const express = require("express");
const { register, login } = require("../contollers/auth.js");
const { getPosts, createPost, updatePost, deletePost } = require("../contollers/post.js");
const router = express.Router();
router.get("/getPosts", getPosts);
router.post("/createPost", createPost);
router.patch("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);
module.exports = router;
