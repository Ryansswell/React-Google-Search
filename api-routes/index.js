const userRouter = require("./userRouter");

const apiRouter = require("express").Router();

apiRouter.use("/api", userRouter);

module.exports = apiRouter;
