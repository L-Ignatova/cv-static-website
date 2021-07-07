const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname));
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.route('/*').get(function(req, res) { 
    res.sendFile(path.join(__dirname, '/index.html')); 
});

app.listen(port);
console.log('Server started at http://localhost:' + port);