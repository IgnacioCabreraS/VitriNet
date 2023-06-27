require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//Express
const app = express();

//Tipos de datos
app.use(express.json())

//Config
app.set('port', port);

//Rutas

app.use('/api' ,require('./rutas'));


//Iniciar express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('error al iniciar el servidor: ' +error)
    }
    else{
        console.log('servidor iniciado en el puerto: ' +port);
    }
})