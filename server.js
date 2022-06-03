require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const dallasController = require('./controllers/attractions.js')

const PORT = process.env.PORT;


mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology: true,
    useUnifiedTopology: true,
})



db = mongoose.connection;
db.on('error', (err) => console.log(`${err.message}  is mongod not running?`));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));


app.use('/dallas', dallasController);




app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});