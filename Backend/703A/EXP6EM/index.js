// npm init -yield
// npm i nodemon express
// npx nodemon index.js
// suppose we hve to create api to 
// 1.getStudent 
// 2.createStudent,
// 3.findStudent,
// 4.updatestudent,
// 5.delelteStudent

const express = require('express');
const app = express()
app.get('/', (req, res) => {
    res.send("this is the home page")
})
app.get('/api/student', (req, res) => {
    res.send("This is student api")
})
app.post('/api/student', (req, res) => {
    res.send("Student Created")
})
app.get('/api/student/:id', (req, res) => {
    res.send("FindStudent")
})
app.put('/api/student', (req, res) => {
    res.send("Student Updated")
})
app.delete('/api/student/:id', (req, res) => {
    res.send("Student Deleted")
})
app.listen(3000, () => {
    console.log('server is running')
})