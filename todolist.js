const express = require('express')
const app = express()
const port = 3000

const todoController = require('./controller/todo')

app.use(express.json())

app.use('/api/todos',todoController)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

// testing
// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

// variabel penampung list nya
// let todolist = {
//     'name' : 'todos',
//     'rows' : [{
//         'id': 1,
//         'text': 'santo',
//         'done': true

//     }] 

// }

// api untuk post
// app.post('/api/todos',(req,res)=>{
//     console.log(req.body);
//     const {text,done} = req.body
//     const id = Math.floor(Math.random()*100);
//     todolist.rows.push({
//         id : id,
//         text : text,
//         done : done

//     })

//     res.send({
//         id : id,
//         success : true
//     })
// })

// api untuk get
// app.get('/api/todos',(req,res)=>{
//     res.send(todolist.rows)
// })

// // api untuk delete
// app.delete('/api/todos/:id',(req,res)=>{
//     const {id} = req.params;
//     const index = todolist.rows.findIndex(x => x.id === parseInt(id))
//     todolist.rows.splice(index, 1)

//     res.send({
//         id : id,
//         delete : true
//     })
// }

// )

