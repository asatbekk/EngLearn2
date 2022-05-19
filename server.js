const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs')
const path = require('path')
const cool = require('cool-ascii-faces')
const mongodb = require('mongodb')
const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://asat2003080808:asat2003080808@cluster0.yt7bp.mongodb.net/Engliear202020?retryWrites=true&w=majority')


const mongoClient = new mongodb.MongoClient('mongodb://localhost:5000', {
    useUnifiedTopology: true
});

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



const start = async () => {
    try {
        await client.connect()
        const db = client.db('users')
        const coll = db.collection('userdata')


        res = await coll.insertOne({name:"Asatbekk"})

        app.listen(PORT, () => console.log('Server works ') )
        console.log(res)
    }
    catch (e) {
        console.log(e)
    }
}

start()





