var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

//All acuatal paths starts with "/skills"
//get request '/skills'
router.get('/', skillsCtrl.index);

module.exports = router;
