const userRouter = require("express").Router();
const { Book } = require("../models");


userRouter.post("/books", async (req, res) => {
  try {
    const { title, authors, description, image, link } = req.body;
    const book = await Book.create({
      title,
      authors,
      description,
      image,
      link,
    });
    res.json(book);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

module.exports = userRouter;
