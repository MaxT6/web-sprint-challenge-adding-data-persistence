// build your `Resource` model here
const db = require('../../data/dbConfig');


const locate = () => {
  return db('resources')
}


const insert = (resource) => {
  return db('resources').insert(resource)
      .then(([resource_id]) => {
          return db('resources').where({ resource_id }).first()
      })

}

module.exports = {
  locate,
  insert,
}