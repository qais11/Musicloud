const express = require('express');
const app = express();
const {json} = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use(express.static(__dirname + '/dist'))

app.listen(port , () => {
  console.log(`listenin' to prot ${port}`);
});
