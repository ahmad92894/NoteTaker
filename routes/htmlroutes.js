const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './public/index.html'));
  //   console.log(noteList);

  

  });
  router.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname +'./public/notes.html'));

  });

module.exports = router;