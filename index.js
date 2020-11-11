require("dotenv").config();
const express = require("express");

const app = express();
const exphbs = require("express-handlebars");

app.locals.loggedIn;
app.locals.username;


  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`sever running on ${PORT}`);
  });

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/home", require("./home"));
app.use("/", require("./landing"));
app.use("/signup", require("./signUp"));
app.use("/login", require("./login"));
app.use("/reset", require("./reset"));
