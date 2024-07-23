const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create Task
router.post('/', taskController.createTask);

// Get All Tasks
router.get('/', taskController.getAllTasks);

// Get Task by ID
router.get('/:id', taskController.getTaskById);

// Update Task
router.put('/:id', taskController.updateTask);

// Delete Task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
