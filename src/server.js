'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = (process.env.NODEJS_PORT || 3000);


app.use(bodyParser.json());


app.get('/', (request, response)=> {
  const fsData = fs.readFileSync('doc/index.txt');

  response.status(200).send(`express-api-test/<br />\n<br />\n${fsData.toString()}`);
});


app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});



/*
fs.writeFile('output.txt', "Hello World!', (err)=> {
  if (err) {
    return (console.error(err));
  }
  
  console.log('File saved successfully!');
});
*/
