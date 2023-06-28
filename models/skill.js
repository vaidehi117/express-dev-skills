const skills = [
    {id: 125223, skill: 'Java Script', done: true},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'HTML', done: true},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };

function getOne(id) {
    id = parsseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    //add the id
    skill.id = Date.now() % 1000000;
    //New skills wouldn't be done
    skill.skill = false;
    skills.push(skill);
  }
  
function getAll() {
    return skills;
  }
