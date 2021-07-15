const express = require('express');
const app = express();

const sequelize = require("./DATABASE/db");

const categoriaRoute = require('./routes/CategoriaRoute');
const indicadoresRoute = require('./routes/indicadoresDineroRoute');
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/categoria', categoriaRoute);
app.use('/indicadoresDinero', indicadoresRoute);

app.get('/', (request, response) => {
    response.send("hello world")
})

app.listen(PORT, () => {
    console.log("serverrunning")
    sequelize.sync({force:false}).then(() => {
        console.log("conexion exitosa")
    }).catch(e => {
        console.log("error")
    })
   
})