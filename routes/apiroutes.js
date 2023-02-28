const express = require('express')
const router = express.Router();
const fs = require('fs');
let db = require('../db/db.json'); 



// app.get('/api/notes', (req, res) => {
//     res.json(db);

// });
// app.post('/api/notes', (req, res) => {
//     noteList.push(req.body);
//     res.json(noteList);
//     // console.log(noteList);
//     fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
//         return err? console.error(err) : console.log('Note saved!');
//     });});
    router.get('/notes', (req, res) => {
        // db = JSON.parse(fs.readFileSync('./db/db.json')) || [];
        res.json(db);
    });
    router.post('/notes', (req, res) => {
        let newNotetosave = {
            ...req.body,
            id: db.length + 1
        }
        db.push(newNotetosave);
        fs.writeFileSync( './db/db.json', JSON.stringify(db,null,2));
        res.json(newNotetosave);
    });


    module.exports = router;