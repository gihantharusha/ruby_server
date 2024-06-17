const app = require("./server")
const db = require("./db")
const contraller = require("./contraller")

//Remember
app.post("/addRemember", (req, res)=>{
    contraller.addRemember(req, res)
})

app.get("/search", (req, res)=>{
    contraller.search(req, res)
})

//Todo

app.post("/addTodo", (req, res)=>{
    contraller.addTodo(req, res)
})

app.get("/viewTodo", (req, res)=>{
    contraller.viewTodo(req, res)
})

app.get("/viewAllTodo", (req, res)=>{
    contraller.viewAllTodo(req, res)
})

app.get("/todoInDate", (req, res)=>{
    contraller.getTodoInDate(req, res)
})

//Remember me

app.post("/addRememberMe", (req, res)=>{
    contraller.addRememberMe(req, res)
})

app.get("/getRememberMe", (req, res)=>{
    contraller.getRememberMe(req, res)
})