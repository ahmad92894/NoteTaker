const express = require('express');
const noteList = require('./db/notes.json');
const app = express();
const PORT = process.env.PORT || 3001;
// const fs = require('fs');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
//   console.log(noteList);

});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname +'/public/notes.html'));
    
});
app.get('/api/notes', (req, res) => {
    res.json(noteList);

});
app.post('/api/notes', (req, res) => {
    noteList.push(req.body);
    res.json(noteList);
    // console.log(noteList);
    fs.writeFile('./db/notes.json', JSON.stringify(noteList), (err) => {
        return err? console.error(err) : console.log('Note saved!');
    });});
app.listen(PORT, () => 
    console.log(`App listening on PORT: ${PORT}`));

  