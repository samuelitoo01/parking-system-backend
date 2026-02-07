import { obtenerIngresos , vehiculosRegistrados , agregarIngresos , verificarDisponibilidad , removerIngreso } from '../models/ingresos.model.js'
import { agregarVehiculo } from '../models/vehiculos.model.js'
import { obtenerTarifas } from '../models/tarifas.model.js'

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
	// verficamos si el vehiculo ya se encuentra registrado
	const vehiculo = await vehiculosRegistrados(placa)
	// Si no lo esta lo registramos y ingresamos el vehiculo
	if(!vehiculo.length){

		const data = await agregarVehiculo({ placa , tipo })
		const ide = await data[0].insertId
		const resp = await agregarIngresos(ide)
		return res.status(200).json({
			"message" : "ingreso registrado con exito , y se registro exitosamente el vehiculo" ,
			"data" : resp
		})
	}
	// obtenemos el id del vehiculo
	const id = await vehiculo[0].id
	const disponibilidad = await verificarDisponibilidad(id)
	if(disponibilidad.length){
		return res.status(409).json({
			"message" : "Ya este vehiculo se ingreso a la base de datos "
		})
	}

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

export async function registrarSalida( req , res ){
try{
	const { id } = req.params

	const result = await removerIngreso(id)

	if(result.affectedRows === 0){
		return res.status(404).json({
			"message" : "Este vehiculo no se ha ingresado"
		})
	}

	return res.status(200).json({
		"message" : "el vehiculo se ha desactivado de nuestros ingresos "
	})

}catch(e){

	return res.status(500).json({
		"message": "Algo ha salido mal al intentar eliminar el ingreso " ,
		"data" : e
	})
}
}
