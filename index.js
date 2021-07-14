const express = require('express');
const app = express();

const sequelize = require("./DATABASE/db");

const categoriaRoute = require('./routes/CategoriaRoute');

app.use('/categoria', categoriaRoute);

app.get('/', (request, response) => {
    response.send("hello world")
})

app.listen(3000, () => {
    console.log("serverrunning")
    sequelize.sync({force:false}).then(() => {
        console.log("conexion exitosa")
    }).catch(e => {
        console.log("error")
    })
   
})