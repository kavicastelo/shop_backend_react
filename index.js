const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =  require('cors');
mongoose.set('strictQuery',true);

require('dotenv').config();

const port = process.env.PORT;
//====================================================
const customerRoute = require('./route/customerRouter');
//====================================================

const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect('mongodb://0.0.0.0:27017/shop').then(()=>{
    app.listen(port, ()=>{
        console.log('Server running on port '+port);
    })
});

app.use('/api/v1/customer',customerRoute);