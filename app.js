const express = require ("express");
const app = express ();
const usuarios =[
    {nome :"Pedro", idade:20},
    {nome :"João", idade:50},
    {nome :"maria", idade:19},
    {nome :"Rimundo", idade:70}
]
app.get("/",(req,res)=>{
    res.json({mensagem:"hello word"})
})
app.get("/usuarios",(req,res)=>{
    res.send(usuarios)
})


module.exports = app;

