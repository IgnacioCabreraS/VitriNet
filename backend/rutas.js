const rutas = require('express').Router()
const conexion = require('./config/conexion');


//Asignacion rutas
//get id_empresa
rutas.get('/',(req,res) => {
    let sql ='select * from empresa'
    conexion.query(sql,(err, rows, fields)=>{
        if (err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get empresa
rutas.get('/:id',(req,res) => {
    const {id}= req.params
    let sql ='select * from empresa where id_empresa = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if (err) throw err;
        else{
            res.json(rows)
        }
    })
})

// agregar empresa
rutas.post('/',(req, res)=> {
    const{nombre,n_productos} = req.body;

    let sql = `insert into empresa(nombre,n_productos) values('${nombre}','${n_productos}')`
    conexion.query(sql, (err, rows, fields) =>{
        if(err) throw err
        else{
            res.json({status: 'Empresa agregada'})
        }
    })
})

//Eliminar empresa
rutas.delete('/:id',(req, res)=>{
    const{id_empresa}=req.params

    let sql =`delete from empresa where id_empresa = '${id_empresa}'`
    conexion.query(sql, (err, rows, fields) =>{
        if(err) throw err
        else{
            res.json({status: 'Empresa eliminada'})
        }
    })

})

//Modificar empresa
rutas.put('/:id', (req,res)=>{
    const{id_empresa}=req.params
    const{nombre,n_productos}=req.body

    let sql= `update empresa set
                nombre = '${nombre}',
                n_productos = '${n_productos}'
                where id_empresa = '${id_empresa}'`
    
    conexion.query(sql, (err, rows, fields) =>{
        if(err) throw err
        else{
            res.json({status: 'Empresa modificada'})
        }
    })
    
})

module.exports = rutas;