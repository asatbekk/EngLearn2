const express = require("express");
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))
const port = 3000;
const fs = require('fs')
const path = require('path')
const user = require("./model/user");
mongoose.connect("mongodb+srv://asatbekkkk:asat20030808@cluster0.povlf.mongodb.net/ENGLEARN20",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('connected');
    }
})





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
app.get('/grammar',(req, res) => {
    res.sendFile(__dirname+'/Grammar.html')
})


app.post('/',(req,res)=>{
    const newUser = new user({
        email:req.body.email,
        password:req.body.password,
    })
    if(req.body.password === req.body.password) {
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err){
                    throw err;
                }
                else{

                    newUser.password = hash;

                    newUser.save((err)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.redirect('/login');
                            console.log('Excellent');
                        }
                    })
                }
            });
        });
        res.json({msg:"user saved"})
    }
    else{
        res.json({msg:"err"})
    }


})





app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);






