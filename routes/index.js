const messages = [
  {
    text: 'Hi there!',
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  console.log('no problems yet');
  messages.push({text: req.body.text, user: req.body.user, added: new Date()});
  res.redirect('/'); //sends users to index page after form submit
})

module.exports = router;