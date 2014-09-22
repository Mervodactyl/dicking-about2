var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.Colour.findAll().success(function (colour) {
    res.render('index', {
      title: 'Dicking about with Colours',
      colour: colour
    });
  });
});

router.get('/colourpage', function (req, res, next) {
  res.render('form', {
    title: 'More dicking about with colours but understanding it this time!',
  });
});

router.post('/colourpage', function (req, res, next) {
  db.Colour.create({
    colour: req.body.colour,
    url: req.body.url,
    text: req.body.text,
    reference: req.body.reference,
  })
    .complete(function(err) {
    if (!!err) {
      console.log('The instance has not been saved:', err)
    } else {
      console.log('We have a persisted instance now')
    }
})
    res.render('form');
});