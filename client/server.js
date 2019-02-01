const express = require('express');
const path = require('path');
const app = express();

// Create application/x-www-form-urlencoded parser

app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', function(req, res) {
  app.send("index.html")
})

app.listen(4600, (req, res)=>{

console.log('Running at localhost:4600');

});

