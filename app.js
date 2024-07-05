const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const strings = require("./config/strings.constant");
const errorHandler = require("./middlewares/errorHandler");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", uploadRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(strings.MESSAGES.SERVER_RUNNING(port));
});

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});
