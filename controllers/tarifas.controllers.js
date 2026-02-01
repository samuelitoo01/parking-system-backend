import { obtenerTarifas } from '../models/tarifas.model.js'

export async function obtenerTarifaGET( req , res ){

try{

	const tarifas = await obtenerTarifas();
	return res.status(200).json({
		"message" : `Se han obtenido las tarifas exitosamente` , 
		"data" : tarifas
	})

}catch(e){

	return res.status(500).json({
		"message ": "Hubo un error al intentar obtener las tarifas" , 
		"data" : e.message
	})
	
}
}