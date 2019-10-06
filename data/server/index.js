const express = require('express');
const articles = require('./../BBCfiles/news-coding-test-dataset/data/articles.js');

const app = express();
const router = express.Router();
const port = 3001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (request, response) => response.send('Welcome to the article hosting server!'));
app.use('/api', router);

router.get('/', (request, response) => {
  let jsonArticles = JSON.stringify(articles);
  response.json(articles);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
