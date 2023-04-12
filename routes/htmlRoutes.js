//creating a router for express

const router = require("express").Router();
const path = require('path');





//GET Route for homepage
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

// GET Route that redirects us to the index
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;