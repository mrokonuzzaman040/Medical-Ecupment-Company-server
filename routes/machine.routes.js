// routes/machine.routes.js
const express = require('express');
const router = express.Router();
const {
  createMachine,
  getAllMachines,
  getMachineById,
  updateMachine,
  deleteMachine,
} = require('../controllers/machine.controller');

// POST /api/machine - Create a new machine record
router.post('/', createMachine);

// GET /api/machine - Retrieve all machines
router.get('/', getAllMachines);

// GET /api/machine/:id - Retrieve a machine by its ID
router.get('/:id', getMachineById);

// PUT /api/machine/:id - Update a machine record by ID
router.put('/:id', updateMachine);

// DELETE /api/machine/:id - Delete a machine record by ID
router.delete('/:id', deleteMachine);

module.exports = router;
