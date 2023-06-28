var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

//All acuatal paths starts with "/skills"
//get request '/skills'
router.get('/', skillsCtrl.index);
//get request '/new' to add new skill
router.get('/new', skillsCtrl.new);
//Get /skills/:id
router.get('/:id', skillsCtrl.show);
//Post request '/skills'
router.post('/', skillsCtrl.create);

module.exports = router;
