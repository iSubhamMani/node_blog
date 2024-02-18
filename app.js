const express = require("express");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.render("404", { title: "404" });
});

console.log("Listening to Port 3000");
