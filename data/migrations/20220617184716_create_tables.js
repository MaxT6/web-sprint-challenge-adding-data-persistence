
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.varchar('project_name', 128)
        .unique()
        .notNullable();
      tbl.varchar('project_description', 128);
      tbl.varchar('project_completed').notNullable();
    })

.createTable('resources', tbl => {
  tbl.increments('resource_id');
  tbl.varchar('resource_name')
    .notNullable()
    .unique();
  tbl.varchar('resource_description', 128);
})

.createTable('tasks', tbl => {
  tbl.increments('task_id');
  tbl.varchar('task_description', 128)
    .notNullable();
  tbl.varchar('task_notes');
  tbl.varchar('task_completed').notNullable();
  tbl.integer('project_id')
    .unsigned()
    .notNullable() //may have to remove
    .references('project_id')
    .inTable('projects');
})

.createTable('project_resources', tbl => {
  tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('project_id')
    .inTable('projects');
  tbl.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('resource_id')
    .inTable('resources');
})
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
