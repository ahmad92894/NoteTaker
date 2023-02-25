const express = require('express');
const app = express();
const Port = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const util = require('util');

app.use(express.json());
app.use(express.static('public'));


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
  
});
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/views/notes.html');
});
app.get('/api/notes', (req, res) => {
    res.sendFile(__dirname + '/db/db.json');
});
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = Date.now();
    fs.readFile(__dirname + '/db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);
})});
app.listen(Port, () => 
    console.log(`App listening at http://localhost:${Port}`));

  