const express = require('express');
var router = express.Router();

const modelo = require('../modelos/modeloRecetas');


router.get('/nuevaReceta', (req,res) =>{
	res.render('/nuevaReceta')

	});


router.get('/eliminarReceta', (req,res) =>{
	res.render('eliminarReceta')

	});

router.post('/nuevaReceta', (req, res)=>{
	/*
	let receta ={
		nombre: req.body.nombre,
		desc: req.body.descripcion
	}*/

	
	modelo.nuevaReceta(req.body,(error, resultado)=>res.rendirect('/nuevaReceta'))
});

router.get('/consultaReceta/:id', (req,res)=>{
	modelo.consultaReceta(req.params.id, (error,resultado)=>res.render('recetario', {registros:resultado}));
});

router.delete('/eliminarReceta/eliminar', (req, res)=>{
	modelo.eliminarReceta(req.body.id_receta, (error, resultado)=>{res.render('eliminarReceta', {mensaje:"Se eliminaron recetas que "}) eliminada con éxito')})

});

module.exports = router;