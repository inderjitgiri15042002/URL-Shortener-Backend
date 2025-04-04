const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewURL(req, res) {
  const shortID = shortid.generate();

  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });

  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortID,
  });
  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { handleGenerateNewURL, handleGetAnalytics };
