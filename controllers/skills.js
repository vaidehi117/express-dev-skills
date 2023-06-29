 const skillModel = require('../models/skill');
 
 module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete:deleteOne
  };

  function deleteOne(req, res) {
    skillModel.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function create(req, res) {
    console.log(req.body, "<_contents of our form");
    skillModel.create(req.body);
    res.redirect('/skills');
  }

  function newSkill(req,res) {
    res.render('skills/new');
  }

  function show(req, res) {
    res.render('skills/show', {
      skills: skillModel.getOne(req.params.id),
    });
  }
  
  
  function index(req, res) {
    res.render('skills/index', {
      skills: skillModel.getAll()
    });
  }

 