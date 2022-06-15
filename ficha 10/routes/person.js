var express = require('express');
var router = express.Router();
var personcontroller=require('../controllers/personcontroller');



//GET home page. 
router.get('/', personcontroller.getallperson);

router.post('/',personcontroller.create)


module.exports =router;





