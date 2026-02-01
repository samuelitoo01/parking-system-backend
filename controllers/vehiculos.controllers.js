import { agregarVehiculo , obtenerVehiculos , eliminarVehiculo , actualizarVehiculo }  from '../models/vehiculos.model.js'

export async function obtenerVehiculosGET(req , res ){
try{

	const data = await obtenerVehiculos()
	return res.status(200).json({
		"message" : " Se han obtenido los vehiculos con exito " , 
		"data " : data
	})

}catch(e)
{
	return res.status(500).json({
		"message" : " Algo ha salido mal al intentar obtener los vehiculos " , 
		"data" : e
	})
}
}

export async function agregarVehiculosPOST(req , res ){
try{


	const { placa , tipo } = req.body

	if(!placa || !tipo){
		return res.status(400).json({
			"message" : "Faltan datos para poder registrar el vehiculo"
		})
	}

	const data = await agregarVehiculo({placa , tipo});

	return res.status(200).json({
		"message" : "Vehiculo creado con exito " , 
		"data" : data 
	})

}catch(e){

return res.status(500).json({

	"message" : `Algo ha salido mal al intentar agregar el vehiculo ` ,
	"data" : e

})

}
}

export async function eliminarVehiculoDELETE( req , res ){
try{

	const { id } = req.params
	const data = await eliminarVehiculo(id)

	if(data.affectedRows === 0 ){
		return res.status(404).json({
			"message" : "No se ha encontrado el usuario"
		})
	}

	return res.status(200).json({
		"message" : "vehiculo eliminado con exito" , 
	})

}catch(e){

	return res.status(500).json({
		"message" : "No se ha podido eliminar el usuario " , 
		"data" : e 
	})
}
}

export async function actualizarVehiculoPUT(req , res ){
try{
	const { placa , tipo } = req.body
	const { id } = req.params 

	const data = await actualizarVehiculo({placa , tipo , id })

	if(data.affectedRows === 0 ){
		return res.status(404).json({
			"message" : "Vehiculo no encontrado para actualizarlo "
		})
	}

	return res.status(200).json({
		"message" : "Vehiculo actualizado con exito"
	})
	
}catch(e){

	res.status(500).json({
		"message" : `Algo ha salido mal al intentar actualizar el vehiculo ` , 
		"data" : e
	})
}
}











