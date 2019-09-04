const express = require('express');
const User = require('..\\db');

const router = express.Router();

router.post('/register', async (req, res)=>{
    try{
        const user = User.create(req.body);
        console.log(user);
        return res.send({user});
    }
    catch(err){
        return res.status(400).send({error: 'Registration failed'});
    }
});

module.exports = app => app.use('/auth', router);