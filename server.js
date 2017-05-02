const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const port = 3000;

app.use(express.static(__dirname + './dist'))

app.use(json());
app.use(cors());


app.listen(port , () => {
  console.log(`listenin' to prot ${port}`);
});
