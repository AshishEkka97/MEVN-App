const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/posts', posts);

app.use(bodyParser.json())

app.use(cors())


app.post('/ajax', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
     email:req.body.email,
     password:req.body.password
   };
   console.log(response);

res.send("Login Successful")
})


app.listen(4600, (req, res)=>{

console.log('Running at localhost:4600');

});
