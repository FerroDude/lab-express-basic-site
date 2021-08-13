const express = require('express');
const app = express();

app.use((request, response, next) => {
  console.log('Middleware logged to console');
  next();
});

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/main.html');
});

app.get('/main', (request, response) => {
  response.sendFile(__dirname + '/views/main.html');
});
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/work', (request, response) => {
  response.sendFile(__dirname + '/views/work.html');
});

app.listen(3020);
