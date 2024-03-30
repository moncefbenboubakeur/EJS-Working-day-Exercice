import express from "express";

const app = express();
const port = 3000;

const now = new Date();
const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
let tagline = "";

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  if (day === 0 || day === 6) {
    tagline = "Hey! It's the weekend, it's time to have fun";
  } else {
    tagline = "Hey! It's a weekday, it's time to work hard";
  }
  console.log("get activated");
  res.render("index.ejs", { tagline });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
