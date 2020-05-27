const path = require('path');
const router = require('express').Router();

// add route /notes to return notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// add route "*" to return index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;

