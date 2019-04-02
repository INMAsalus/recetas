const mysql = require ('mysql');
const config = {
		host:'wm1711.com',
		user:'c21_wm1711',
		password:'FK0yz6sd7mq5AE',
		database:'c21_wm1711'
};

const conexion = mysql.createConnection(config);
conexion.connect(error=>{
		if (error)console.log('No ha sido posible realizar la conexión. ')
		else console.log('Conexión realizada con éxito')

})

module.exports = conexion;