// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const resource = await Resource.locate()
    res.json(resource)
  }
  catch(err) {
    next(err)
  }
  
})

module.exports = router;