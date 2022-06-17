// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Project = require('./model')

router.get('/', async (req, res) => {
  const projects = await Project.locate()
  res.json(projects)
})

router.post('/', async (req, res) => {
  const project = req.body
  const newProject = await Project.insert(project)
  res.json(newProject)
})


module.exports = router;