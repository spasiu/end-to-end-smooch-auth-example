const express = require('express');
const jwt = require('jsonwebtoken');
const KEY_ID = process.env.KEY_ID || 'app_xxxxxxxxx';
const SECRET = process.env.SECRET || 'xxxxxxxxxxxxx';

express()
    .use(express.static('public'))
    .get('/users/:id/token', (req, res) => {
        const token = jwt.sign({
           scope: 'appUser',
           userId: req.params.id,
           exp: (Date.now() / 1000) + 15 // token expires in 15 seconds
       }, SECRET,        {
           header: {
               alg: 'HS256',
               typ: 'JWT',
               kid: KEY_ID
           }
       });

       res.json({ token });
    })
    .listen(process.env.PORT || 4000);
