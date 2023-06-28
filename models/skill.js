const todos = [
    {id: 125223, skill: 'Java Script', done: true},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'HTML', done: true},
    {id: 137502, skill: 'Python', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parsseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }
 