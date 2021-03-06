const mysql = require('mysql');
const conexion = require('../contrasenya');

const nuevaReceta = (receta,callback)=>{
	/*var fecha = new Date();
	var fechaFormat = fecha.getFullYear()+ "/" + (fecha.getMonth() +1) + "/" + fecha.getDate();
	console.log(fechaFormat);*/
	conexion.query('INSERT INTO recetas (nombre, descripcion) VALUES("' + receta.nombre + '","' + receta.descripcion +  '")', (error, resultado)=>{
		return callback(error, resultado);
	});
}

const consultaReceta = (id, callback)=>{
	console.log(id);
	conexion.query('SELECT * FROM recetas WHERE id_receta=?', id, (error, resultado)=>{
		return callback(error, resultado);
	})
}

const eliminaReceta = (texto, callback)=>{
	conexion.query('DELETE FROM recetas WHERE nombre LIKE "%"?"%"', texto, (error, resultado)=>{
		if (error) throw error;
		else {
			return callback(error, resultado);
		}
	})
}

module.exports = {nuevaReceta, consultaReceta, eliminaReceta};