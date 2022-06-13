var express = require('express');
var router = express.Router();
var personcontroller=require('../controllers/personcontroller');

router.get('/',personcontroller.getall);

module.exports =router;






/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Person")
});

module.exports = router;
