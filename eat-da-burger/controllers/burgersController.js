const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(
    [ "type", "eaten" ], 
    [ req.body.type, req.body.eaten ], 
    result => res.json({ id: result.insertId }));
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;
  burger.update({ eaten: req.body.eaten }, condition, result => {
    if (result.changedRows == 0) return res.status(404).end();
    else res.status(200).end();
  });
});

module.exports = router;
