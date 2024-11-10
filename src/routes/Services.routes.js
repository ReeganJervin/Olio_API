const express = require('express');
const router = express.Router();
const Services =   require('../controllers/Services.controller');

// Retrieve a single Services with id
router.get('/:id', Services.findById);
// Create a new dash Config
router.post('/', Services.create);
// Update a Services with id
router.put('/:id', Services.update);
// Delete a Services with id
router.delete('/:id', Services.delete);
// Retrieve Services
router.get('/', Services.findAll);
module.exports = router