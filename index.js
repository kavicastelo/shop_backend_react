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
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://0.0.0.0:27017/shop').then(()=>{
    app.listen(port, ()=>{
        console.log('Server running on port '+port);
    })
});

app.use('/api/v1/customer',customerRoute);