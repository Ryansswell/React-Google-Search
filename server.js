const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const apiRouter = require("./api-routes");
const app = express();

mongoose.connect("mongodb://localhost/google_books_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API BEFORE adding routes for serving client
app.use(apiRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
