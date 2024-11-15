const express = require('express')
const cors = require('cors')
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require('./db');

const app = express();

app.use(cors())

app.use(express.json());

app.post("/todo",async function(req, res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
    //put it in mongodb

})


app.get("/todos",async function(req, res){
    const todos = await todo.find({});
    console.log(todos) //promise

    res.json({
        todos
    })
})

app.put("/completed",async function(req, res){
     const updatePayload = req.body;
     const parsedPayLoad = updatePayload.safeParse(updatePayload);
     if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You send the wrong inputs",
        })
        return;
     }
     await todo.update({
        _id: req.body.id
     },{
        completed: true
     })
     res.json({
        msg: "Todo marked as completed"
     })
})

app.listen(3000);



