const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3456;

mongoose.connect('mongodb+srv://zaindev:new123@cluster0.qvazh4d.mongodb.net/')
.then(()=>{
    console.log('data base connect')
})
.catch((err)=>{
    console.log(err,'datbase not connected')
})

app.use(express.json())
app.use('/books', require('./routes/books'));

app.listen(PORT,()=>{
    console.log(`Terminal is working on ${PORT}`)
})