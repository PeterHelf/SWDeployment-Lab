var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(['user1','user2','user3']);
});

module.exports = router;
