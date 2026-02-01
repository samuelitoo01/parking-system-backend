import conection from '../database/config.db.js'

export async function obtenerVehiculos(){

	const [ rows ] = await conection.query('SELECT * FROM vehiculos')
	return rows 

}

export async function agregarVehiculo( vehiculo ){

	const { placa , tipo } = vehiculo 

	const data = await conection.query(`INSERT INTO vehiculos ( placa , tipo ) VALUES (?,?)` ,
		[placa , tipo])
	return data 
}

export async function eliminarVehiculo( id ){

	const data = await conection.query('DELETE FROM vehiculos WHERE id = ?' , [id])

	return data 
}

export async function actualizarVehiculo( vehiculo ){

	const { placa , tipo , id } = vehiculo 

	const data = await conection.query('UPDATE vehiculos SET placa=? , tipo=? WHERE id=?' ,[placa , tipo , id ])

	return data
}







