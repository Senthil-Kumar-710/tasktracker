let tasks = [];
let nextId = 1;

// Create Task
exports.createTask = (req, res) => {
  const task = {
    id: nextId++,
    name: req.body.name,
    completed: false,
  };
  tasks.push(task);
  res.status(201).json(task);
};

// Get All Tasks
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// Get Task by ID
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
};

// Update Task
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  task.name = req.body.name || task.name;
  task.completed = req.body.completed ?? task.completed;
  res.json(task);
};

// Delete Task
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Task not found');
  tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
};
