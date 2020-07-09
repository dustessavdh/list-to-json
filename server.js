const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/html/index.html`);
});

app.post('/save', (req, res) => {
    const rawJSON = req.body.data;
    //TODO save it and stuff
    res.end('success');
});

app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});