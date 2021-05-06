//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const user = req.body.user;
    const correo = req.body.correo;
    conexion.query('INSERT INTO users SET ?',{user:user, correo:correo}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const correo = req.body.correo;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{user:user, correo:correo}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};