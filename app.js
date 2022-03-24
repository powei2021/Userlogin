const express = require('express')
//const bodyParser = require('body-parser')
require('dotenv').config();
const MongoDB = require('./utils/mongo.config')
const indexRouter = require('./routes/create');
const { PORT } = process.env

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//app.get('/', indexRouter);
  
app.listen(PORT, async() => {
    await MongoDB();
    console.log(`Server listening on port ${PORT}`);
})
module.export = app;