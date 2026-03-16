const express = require("express")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.static("public"))

let notes = []

app.get("/notes", (req,res)=>{
res.json(notes)
})

app.post("/notes",(req,res)=>{
const note = req.body.note
notes.push(note)
res.send("Note added successfully")
})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})