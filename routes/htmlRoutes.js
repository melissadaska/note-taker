const path = require('path');


module.exports = function(app) {

// add route /notes to return notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// add route "*" to return index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

};

