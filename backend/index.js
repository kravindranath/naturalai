//index.js
const express = require("express");
const app = express();
const process = require("process");
const port = 9000;

// Import and use routes
const routes = require("./routes");

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
