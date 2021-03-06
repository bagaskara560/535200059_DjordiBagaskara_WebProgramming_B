const express = require("express");

const router = express.Router();

const app = express();

router.get("/", async (req, res) => {
  // check user session
  if (!req.session.user) {
    res.redirect("/auth/login");
  } else {
    res.render("pages/index");
  }
});

module.exports = router;