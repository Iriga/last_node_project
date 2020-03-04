const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();

app.use(express.json());

const routes = require('./routes/route');
app.use('/', routes);


app.listen(PORT, () => console.log(`The server is lestining in PORT ${PORT}`));

mongoose.connect(
    "mongodb://localhost:27017/driver_car?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
    {useNewUrlParser:true}
);

const db = mongoose.connection;

db.on('error', error => console.error('An error ocurred, ', error))
db.once('open', () => {
    console.log(`connected to the database in PORT -> ${PORT}`)

})

module.exports=app;