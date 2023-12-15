// create a web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const comments = require('./comments');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
  res.send(
    comments.getComments()
  );
});

app.post('/comments', (req, res) => {
  comments.addComment(req.body.comment);
  res.send({ status: 'ok' });
});

app.listen(process.env.PORT || 8081);