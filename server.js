const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiroutes');  
// const htmlRoutes = require('./routes/htmlroutes');
//const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use('/', htmlRoutes);
 app.use('/api', apiRoutes);



app.listen(PORT, () => 
    console.log(`App listening on PORT: ${PORT}`));

