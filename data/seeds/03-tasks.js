exports.seed = async function(knex) {
  await knex('tasks').insert([
    { task_description: 'Apply canine harness to Rosemary', task_notes: 'Rosemary will actively attempt to avoid application of harness', task_completed: false, project_id: 1},
    { task_description: 'Dock tether to harness', task_notes: 'Ensure docking clasp is closed', task_completed: false,  project_id: 1},
    { task_description: 'Scavage plutonium', task_notes: 'Discover of plutonium is essential for ship operations. Investigate local item purveyors such as Walmart for stock.', task_completed: false,  project_id: 2},
    { task_description: 'Assemble Hull', task_notes: 'Construct exterior of ship following approved Vorridian schematics', task_completed: false,  project_id: 2},
    { task_description: 'Find launch site', task_notes: 'Launch site must be both clear and seculded', task_completed: false,  project_id: 2},
    { task_description: 'Place formula filled bottle in cranial ingestion orifice', task_notes: 'Ensure minimal airflow into baby unit to avoid it emitting alarm functions later', task_completed: false,  project_id: 3},
  ])
};