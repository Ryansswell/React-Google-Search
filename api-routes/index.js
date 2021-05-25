const appRouter = require("express").Router();
const userRouter = require("./userRouter");

appRouter.use("/api", userRouter);

module.exports = appRouter;
