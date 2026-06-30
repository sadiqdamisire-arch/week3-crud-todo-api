const express = require("express");

const app = express();

//body parsing middlewares
app.use(express.json()); 

let todos = [
    {id: 1, task: "Learn Node.js", completed: false},
    {id: 2, task: "Build CRUD API", completed: false},
];

app.get("/todos", (req, res) => {
    res.status(200).json(todos);  // send array as JSON
});

app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, ...req.body };  // Auto-ID
    todos.push(newTodo);
    res.status(201).json(newTodo);  // send the created todo as JSON
});