import { obtenerIngresos , vehiculosRegistrados , agregarIngresos } from '../models/ingresos.model.js'
import { agregarVehiculo } from '../models/vehiculos.model.js'

export async function obtenerIngresosGET(req , res){
try{
	const data = await obtenerIngresos()

	return res.status(200).json({
		"message" : "Los ingresos se han obtenido con exito " , 
		"data" : data
	})

}catch(e){

	return res.status(500).json({
		"message" : "Algo ha salido mal al intentar obtener los ingresos " , 
		"data" : e
	})
}
}

export async function agregarIngreso( req , res ){
try{

	const { placa , tipo } = req.body 

	const vehiculo = await vehiculosRegistrados(placa)

	if(!vehiculo.length){
		
		const data = await agregarVehiculo({ placa , tipo })
		const ide = await data[0].insertId
		const resp = await agregarIngresos(ide)
		return res.status(200).json({
			"message" : "ingreso registrado con exito , y se registro exitosamente el vehiculo" , 
			"data" : resp
		})
	}

	const id = await vehiculo[0].id
	const data = await agregarIngresos(id)

	return res.status(200).json({
		"message" : "Ingreso creado con exito " , 
		"data" : data
	})

}catch(e){

	return res.status(500).json({
		"message" : "Algo ha salido mal al intentar agregar el vehiculo a los ingresos " , 
		"data" : e
	})

}
}