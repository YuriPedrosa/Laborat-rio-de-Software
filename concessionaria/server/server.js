const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//iniciado o db
mongoose.connect(
    'mongodb://localhost:27017/concessionaria', 
    { useNewUrlParser: true , useUnifiedTopology: true  } 
);

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);