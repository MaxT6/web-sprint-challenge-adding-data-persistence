// build your `/api/tasks` router here
const express = require('express');
const helpers = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    helpers.find()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/', (req,res,next) => {
    helpers.insert(req.body)
    .then(newTask => {
        res.status(201).json(newTask[0]);
    })
    .catch(next)
})



module.exports = router;
