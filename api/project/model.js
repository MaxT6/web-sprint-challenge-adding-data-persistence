// build your `Project` model here
const db = require('../../data/dbConfig');

const locate = () => {
  return db('projects')
    .then((projects) => 
      projects.map((proj) => ({
        ...proj,
        project_completed: proj.project_completed ? true : false,
      }))
    )
    .catch((err) => console.log(err.message))
}

const insert = (project) => {
  return db('projects')
  .insert(project)
  .then(([project_id]) => db('projects').where({ project_id }))
  .then((projects) => 
  projects.map((proj) => ({
        ...proj,
        project_completed: proj.project_completed ? true : false,
      }))
    )
    .catch((err) => console.log(err.message))
}

module.exports = {
  locate,
  insert,
}