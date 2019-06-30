const express = require('express')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')
const db = 'mongodb+srv://pablotome:vcmpat02@clusterptome-0snau.mongodb.net/EventsDB?retryWrites=true&w=majority'

mongoose.connect(db, {useNewUrlParser: true}, err => {
    if (err){
        console.log('Error: ' + err)
    }
    else {
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error){
            console.log(error)
        }
        else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if (error){
            console.log(error)
        } else {
            if (!user){
                res.status(401).send('invalid email')
            }
            else if (user.password !== userData.password) {
                res.status(401).send('invalid password')
            }
            else {
                res.status(200).send(user)
            }
        }
    })
})


module.exports = router