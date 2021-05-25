const appRouter = require("express").Router();
const userRouter = require("./userRouter");

apiRouter.use("/api", userRouter);

module.exports = appRouter;
