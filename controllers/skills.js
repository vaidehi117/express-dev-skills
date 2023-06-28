 const skillmodel = require('../models/skill');
 
 module.exports = {
    index,
    show,
    new: newSkill,
    create
  };

  function create(req, res) {
    console.log(req.body, "<_contents of our form");
    skillmodel.create(req.body);
    res.redirect('/skills');
  }

  function newSkill(req,res) {
    res.render('skills/new');
  }

  function show(req, res) {
    res.render('skills/show', {
      skills: skillmodel.getOne(req.params.id),
    });
  }
  
  
  function index(req, res) {
    res.render('skills/index', {
      skills: skillmodel.getAll()
    });
  }

 