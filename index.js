const express = require("express");
const path = require("path")
const app = express();
const port = 3000;
const db = require("./config/db")

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/", require("./routes/index"));
app.use("/", express.static(path.join(__dirname, "/assets")));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is live on port: " + port);
});
