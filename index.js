const express = require('express')
require('dotenv').config()
const app = express()

const port= process.env.PORT || 4000;
 app.get('/', (req ,res)=>{
    res.send("Hi, Welcome to the world of Node.js")
 })
 app.get('/about', (req,res)=>{
    res.send ("this is mya bout page ");
 })
 app.get('/login', (req,res)=>{
    res.send("<h1>This is the login Page </h1>");

 })
 app.listen(port ,()=>{
    console.log(`Server is running at port ${port}`)
 })