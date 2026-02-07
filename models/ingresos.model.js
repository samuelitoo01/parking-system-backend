import conection from '../database/config.db.js'

export async function obtenerIngresos(){

	const [rows] = await conection.query(`SELECT * FROM ingresos `)
	return rows

}

export async function vehiculosRegistrados(placa){

	const [rows] = await conection.query("SELECT * FROM vehiculos WHERE placa = ?" , [placa])
	console.log(rows)
	return rows

}

export async function agregarIngresos( idVehiculo ){

	const [rows] = await conection.query('INSERT INTO ingresos (vehiculo_id , hora_entrada) VALUES (?, NOW())' ,
		[idVehiculo])
	return rows
}

export async function verificarDisponibilidad( idVehiculo ){

	const [rows]= await conection.query('SELECT id FROM ingresos WHERE vehiculo_id = ? AND hora_salida IS NULL' , [idVehiculo])
	console.log(rows)
	return rows
}

export async function removerIngreso( idVehiculo ){

	const [result] = await conection.query('UPDATE ingresos SET hora_salida = NOW() WHERE vehiculo_id = ? AND hora_salida IS NULL ' , [idVehiculo])
	return result

}
