const fs = require('fs');
const router = require('express').Router();
const path = require('path');

var noteData;

fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) throw err;
    noteData = JSON.parse(data);
})

// add GET route /api/notes to read db.json and return all saved notes as json
router.get('/api/notes', (req, res) => {
    res.json(noteData);
});

// add POST route /api/notes to receive a new note to save on the request body, add to db.json file, and return the new note to the client
router.post('/api/notes', (req, res) => {
    var newNote = req.body;
    noteData.push(newNote);
    let parsedata = JSON.stringify(noteData)
    fs.writeFile(path.join('db.json'), parsedata, (err) => {
        if (err) throw err;
    })
    res.json(noteData);
});

module.exports = router;
