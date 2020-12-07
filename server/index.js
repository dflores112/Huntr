const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist/')));
const dbMethods = require('../database/index.js');

app.get('/companies', (req, res) => {
  dbMethods.getCompanies((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/add', (req, res) => {
  dbMethods.saveCompany((err) => {
    if (err) {
      res.send(500);
    } else {
      res.send(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
