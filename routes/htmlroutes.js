const express = require('express').Router();
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './public/index.html'));
  //   console.log(noteList);

  

  });
  app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname +'./public/notes.html'));

  });

module.exports = app;