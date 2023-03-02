const router = require("express").Router();
const db = require("../db.json");

router.get("/api/notes", function (req, res) {
  res.json(db);
});

module.exports = router;
