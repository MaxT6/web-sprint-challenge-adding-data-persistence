// build your `Resource` model here
const db = require('../../data/dbConfig');


const locate = () => {
  return db('resources')
}

module.exports = {
  locate,
}