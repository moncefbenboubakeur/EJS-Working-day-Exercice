import express from "express";

const app = express();
const port = 3000;

const now = new Date();
const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
let type = "a weekday";
let adv = "it's time to work hard";

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have fun";
  }
  console.log("get activated");
  //   res.render("index.ejs", { dayType: type, advice: adv });
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
