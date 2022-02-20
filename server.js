const express = require('express');
const path = require('path');

const todoDb = require('./data/todo-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/todos', (req, res) => {
    res.render('todos/index', { todos: todoDb.getAll() })
})

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});