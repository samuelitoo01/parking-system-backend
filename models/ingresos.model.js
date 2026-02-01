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