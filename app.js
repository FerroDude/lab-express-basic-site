const express = require('express');
const hbs = require('hbs');

const app = express();

//register partials to HBS
hbs.registerPartials(__dirname + '/views/partials');

//set HBS as templating engine
app.set('view engine', 'hbs');

//tell express where views are located
app.set('views', __dirname + '/views');

//fetch resources from public folder(images, styles)
app.use(express.static('public'));

app.locals.title = 'Alex Honnold';

app.get('/', (request, response) => {
  response.render('home', {
    title: 'Alex Honnold',
    name: 'Alex Honnold',
    location: {
      country: 'United States of America',
      city: 'Sacramento',
      state: 'California'
    },
    article: 'this is the / page'
  });
});

app.get('/home', (request, response) => {
  response.render('home', {
    title: 'Home',
    name: 'Alex Honnold',
    location: {
      country: 'United States of America',
      city: 'Sacramento',
      state: 'California'
    },
    header: "It's time to know about Alex Honnold!",
    article: 'Alex is a rock climber, famous for his free solo climbs.',
    picture: 'images/alex-honnold-cliff.jpg'
  });
});
app.get('/about', (request, response) => {
  response.render('about', {
    title: 'About',
    title: 'Alex Honnold',
    name: 'Alex Honnold',
    location: {
      country: 'United States of America',
      city: 'Sacramento',
      state: 'California'
    },
    header: 'A little bit about Alex.',
    article: 'this is the about page',
    picture: 'images/alex-honnold-visto-de-cima.jpg'
  });
});
app.get('/work', (request, response) => {
  response.render('work', {
    title: 'Work',
    header: "Some of Alex's most famous achievments.",
    article: 'this is the work page',
    picture: 'images/alex-honnold-training.jpg'
  });
});

app.listen(3020);
