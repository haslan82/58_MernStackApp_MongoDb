const PostSchema = require("../models/post.js");

const getPosts = async (req, res) => {
  try {
    const getPosts = await PostSchema.find();
    res.status(200).json(getPosts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

/* const createPost = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}; */


const createPost = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    res.status(201).json(newPost); // Başarılı
  } catch (error) {
    console.error("Create Post Error:", error.message);
    res.status(500).json({ msg: "Post oluşturulamadı. Lütfen tekrar deneyin." });
  }
};





const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


/*  */
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await PostSchema.findByIdAndDelete(id);
    res.status(200).json({ data: deletePost, msg: "silme işlemi gerçekleşti" });

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};




module.exports = { getPosts, createPost, updatePost, deletePost };
