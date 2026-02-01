import conection from '../database/config.db.js'

export async function obtenerTarifas(){

	const [rows] = await conection.query(`SELECT * FROM tarifas`);
	return rows 

}


