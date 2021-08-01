const express = require('express');
const app = express();
const sequelize = require('./DATABASE/db')

const categoriaRoute = require('./routes/CategoriaRoute')
const indicadoresRoute = require('./routes/indicadoresDineroRoute')
const flujoEfectivoRoute = require('./routes/flujoEfectivoRoute')
const semana = require('./routes/semanaRoute')

const PORT = 3005;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/getSemanaPDF',semana)
app.use('/categoria', categoriaRoute);
app.use('/indicadoresDinero', indicadoresRoute);
app.use('/flujoEfectivo', flujoEfectivoRoute);

app.get('/', (request, response) => {
    
})

app.listen(PORT, () => {
    console.log("serverrunning")
    sequelize.sync().then(() => {
        console.log("db corring")
    })
   
})