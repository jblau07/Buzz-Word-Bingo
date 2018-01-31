const express = require('express');
const app = express();
const buzzRoutes = require('./routes/buzzwords');

const PORT = process.env.PORT || 8080;
const bodyParse = require('body-parser');

app.use(express.static('public'));

app.use(bodyParse.urlencoded({ extended: true }))

app.listen(8080, (err) => {
  if (err) {throw err;}
  console.log(`Server's up on port: ${PORT}`)
})