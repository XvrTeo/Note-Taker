const router = require("express").Router();
let db = require("../db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.get("/api/notes", function (req, res) {
    res.json(db);
});

router.post("/api/notes", function (req, res) {
    req.body.id = uuidv4();
    db.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(db));
    res.json(db);
});

router.delete("/api/notes/:id", function (req, res) {
    db = db.filter((note) => note.id != req.params.id);
    fs.writeFileSync("./db.json", JSON.stringify(db));
    res.json(db);
});

module.exports = router;
