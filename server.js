const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs')
const path = require('path')

app.use('/static', express.static(__dirname+'/public'))


app.get('/vocabulary',(req, res) => {
    res.sendFile(__dirname+'/vocabulary.html')
})
app.get('/quizes',(req, res) => {
    res.sendFile(__dirname+'/quizes.html')
})
app.get('/',(req, res) => {
    res.sendFile(__dirname+'/registration.html')
})
app.get('/EngLearn',(req, res) => {
    res.sendFile(__dirname+'/EngLearn.html')
})
app.get('/contact',(req, res) => {
    res.sendFile(__dirname+'/contact.html')
})
app.get('/lecture',(req, res) => {
    res.sendFile(__dirname+'/lecture.html')
})
app.get('/registration',(req, res) => {
    res.sendFile(__dirname+'/registration.html')
})
app.get('/Grammar',(req, res) => {
    res.sendFile(__dirname+'/Grammar.html')
})




app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);

