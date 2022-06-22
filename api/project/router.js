// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Project = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.locate()
    res.json(projects)
  }
  catch(err) {
    next(err)
  }
  
})


router.post('/', async (req, res, next) => {
  try {
    const project = req.body
    const newProject = await Project.insert(project)
    res.json(newProject[0])
  } 
  catch(err) {
    next(err)
  }
})

module.exports = router;