var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/player', function(req, res, next) {
  res.render('player', { title: 'Express' });
});
router.get('/baidu', function(req, res, next) {
  res.render('baiduplayer', { title: 'Express' });
});
module.exports = router;
