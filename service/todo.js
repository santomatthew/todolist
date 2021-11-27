const { text } = require('express');
const todolist = require('../model/todosmodel')

 function getTodos(req,res){
    console.log(todolist.rows);
    res.send(todolist.rows)
}

function postTodos(req,res){
    console.log(req.body);
    const {text,done} = req.body
    const id = Math.floor(Math.random()*100);
    todolist.rows.push({
        id : id,
        text : text,
        done : done

    })

    res.send({
        id : id,
        success : true
    })
}

function deleteTodos(req,res){
    const {id} = req.params;
    const index = todolist.rows.findIndex(x => x.id === parseInt(id))
    todolist.rows.splice(index,  1)

    res.send({  
        id : id,
        delete : true
    })
}

function updateTodos(req,res){
    const {id} = req.params;
    const {text,done} = req.body
    const index = todolist.rows.findIndex(x => x.id === parseInt(id))

    if(text && done!=undefined || text && done!=null){
        todolist.rows[index].text = text
        todolist.rows[index].done = done
    }

    else if(text){
        todolist.rows[index].text = text
    }

    else if(done!=undefined||done!=null){
        todolist.rows[index].done = done
    }

    else{
        res.send("Data yang diupdate tidak ada")
    }


    res.send({
        id : id,
        text : text,
        done : done,
        update : true
    })
}


module.exports = {
    getTodos,
    postTodos,
    deleteTodos,
    updateTodos
}