const userRouter = require("express").Router();

// example signup
userRouter.post("/user", (req, res) => {
  res.json({
    id: 1,
    email: "fake@email.com",
    firstName: "Fake",
    lastName: "User",
  });
});

module.exports = userRouter;
