const skills = [
    {id: 125223, skill: 'Java Script', done: false},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'HTML', done: true},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    //Fine the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    let skill = skills[idx];
    skill = {
      ...skill,
    }
  }

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    //add the id
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }
  
function getAll() {
    return skills;
  }
