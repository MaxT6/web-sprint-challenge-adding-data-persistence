
exports.seed = async function(knex) {
  await knex('projects').insert([
    { project_name: 'Walk Rosemary', project_description: 'Providing stimulation and bowel relif for canine sepecimin', project_completed: '0'},
    { project_name: 'Design Spaceship to Return Home', project_description: 'Life on this planet is only growing more hostile. Construction on escape vessel must be completed soon to avoid disater', project_completed: '0'},
    { project_name: 'Feed Youngest Family Unit', project_description: 'Provide life-sustaining sustenence for unit', project_completed: '0'}
  ])
};
