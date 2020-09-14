const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const { db } = require('./db/index')
const Organization = require('./router/organization.route')
const organization = require('./models/organization.model')

app.get('/', (req,res) =>{
res.send('Hello World')
})

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json({}))

db()
app.use(organization)

app.listen(3000,() =>{
console.log('the server runs at port' ,port)}
);