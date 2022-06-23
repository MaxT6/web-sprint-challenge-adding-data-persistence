// build your `Task` model here

const db = require('../../data/dbConfig');

function find() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
        .then((tasks) =>
            tasks.map((task) => ({
                ...task,
                task_completed: task.task_completed ? true : false,
            }))
        )
        .catch((err) => console.log(err.message))
}

function insert(task) {
    return db('tasks').insert(task)
        .then(() => {
            return db('tasks')
                
        })
        
        .then((tasks) =>
        tasks.map((task) => ({
            ...task,
            task_completed: task.task_completed ? true : false,
        }))
    )
    .catch((err) => console.log(err.message))
}

module.exports = {
    find,
    insert

}