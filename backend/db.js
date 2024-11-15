const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:lCZZz1QXtPIjVO4N@cluster0.bjfpr.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}