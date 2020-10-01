const express = require('express');
const Sequelize = require('sequelize');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

//handle get request by provided item's id
app.get('/api/item/:itemId', (req, res) => {
  db.query(`SELECT * FROM itemTable WHERE id = ${req.param('itemId')};`, { type: Sequelize.QueryTypes.SELECT })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.send(err)
    })
})
  // .then((result) => {
  //   res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
  // })
  // .catch((err) => {
  //   res.send(err)
  // })

//handle get request by provided seller's id
app.get('/api/seller/:sellerId', (req, res) => {
  db.query(`SELECT * FROM sellerTables WHERE id = ${req.param('sellerId')};`, { type: Sequelize.QueryTypes.SELECT })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.send(err)
    })
})


//handle get request by provided faq's id
app.get('/api/faq/:faqId', (req, res) => {
  db.query(`SELECT * FROM faqTable WHERE id = ${req.param('faqId')};`, { type: Sequelize.QueryTypes.SELECT })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.send(err)
    })
})
