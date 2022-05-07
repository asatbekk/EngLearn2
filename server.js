const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs')
const path = require('path')
const cool = require('cool-ascii-faces')

app.use('/static', express.static(__dirname+'/public'))


express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/cool', (req, res) => res.send(cool()))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

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






