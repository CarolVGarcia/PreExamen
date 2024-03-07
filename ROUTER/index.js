import express from 'express';
import json from 'body-parser';

export const router = express.Router();

router.get('/', (req, res)=>{

    res.render('index',{titulo:"Mis practicas js", nombre:"Vazquez Garcia Carol"})


})
/*
router.get('/tabla',(req,res)=>{
    //parametros
    const params = {
        numero:req.query.numero
    }
    res.render ('tabla',params)
})

router.post('/tabla',(req,res)=>{
    //parametros
    const params = {
        numero:req.body.numero 
    }
    res.render ('tabla',params)
})
*/
router.get("/PagoDeRecibo", (req, res) => {
    const params = {
      valor: req.query.valor,
      pInicial: req.query.pInicial,
      plazos: req.query.plazos,
      folio: req.query.folio,
      descripcion: req.query.descripcion,
    };
    res.render("PagoDeRecibo", params);
  });
  
  router.post("/PagoDeRecibo", (req, res) => {
    const params = {
      valor: req.body.valor,
      pInicial: req.body.pInicial,
      plazos: req.body.plazos,
      folio: req.body.folio,
      descripcion: req.body.descripcion,
    };
    res.render("PagoDeRecibo", params);
  });
  
/*router.post('/tabla',(req,res)=>{

})*/
let rows;

/*router.get('/alumnos',async(reg,res)=>{
    rows = await alumnoDb.mostrarTodos();
    res.render('alumnos',{reg:rows});
});*/

let params;

/*router.post('/alumnos',async(req,res)=>{
    try{
        params = {
            matricula:req.body.matricula,
            nombre:req.body.nombre,
            domicilio:req.body.domicilio,
            sexo:req.body.sexo,
            especialidad:req.body.especialidad
        }
       const res = await alumnoDb.insertar(params);
    }catch(error){
        console.error(error)
        res.status(400).send("Sucedio un error: " + error);
    }

    rows = await alumnoDb.mostrarTodos();
    res.render('alumnos',{reg:rows});
});*/

export default {router}
