const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

let tasks = []; // In-memory storage

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a task
app.post('/tasks', (req, res) => {
    const task = { id: Date.now(), ...req.body, completed: false };
    tasks.push(task);
    res.status(201).json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.status(200).json({ message: "Task deleted" });
});

// Toggle complete
app.patch('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.map(task =>
        task.id === parseInt(id) ? { ...task, completed: !task.completed } : task
    );
    res.status(200).json({ message: "Task toggled" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
