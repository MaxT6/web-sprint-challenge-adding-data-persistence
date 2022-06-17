exports.seed = async function(knex) {
  await knex('resources').insert([
    { resource_name: 'Rosemary', resource_description: 'Canine family unit'},
    { resource_name: 'Janice', resource_description: 'Female adult family unit'},
    { resource_name: 'Max', resource_description: 'Male adult family unit'},
    { resource_name: 'Twila', resource_description: 'Baby family unit'}
  ])
};

