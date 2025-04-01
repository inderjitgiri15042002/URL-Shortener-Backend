const express = require("express");
const { connectToMongoDB } = require("./connect");
const path = require("path");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set a view Engine to ejs
// use res.render to load up an ejs view file

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("MongoDB connected");
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
