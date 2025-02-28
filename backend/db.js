const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:ej9W24IMMD5gOtI4@cluster0.bjfpr.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
