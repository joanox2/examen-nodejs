var express = require('express');
var body_parser = require("body-parser");

app = express();

app.use(body_parser.json());

  app.post('/removeduplicatewords', (req, res) => {
    
  });

  app.post('/detectfiletype', (req, res) => {
    
  });

app.listen(3000);