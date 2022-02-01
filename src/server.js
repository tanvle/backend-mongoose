// Backend server with Express framework and MongoDB
const express = require('express');
const api = require('./api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({'path': 'src/config/config.env'});
const  PORT = process.env.PORT || 8082;

const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());
    app.use('/api/v1', api);

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection
    db.on('error', console.error.bind(console, 'DB connection error: '));
    db.once('connected', () => {
        console.log('DB connected to: ' + process.env.MONGO_URL);
        app.listen(PORT, (err) => {
            if(err) console.log(err);
            console.log('Server listens on port:' + PORT);
        });
    });
