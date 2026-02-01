import { agregarVehiculosPOST , obtenerVehiculosGET	, eliminarVehiculoDELETE , actualizarVehiculoPUT } from '../controllers/vehiculos.controllers.js'
import Router from 'express'; 

const vehiculosRouter = Router();
vehiculosRouter.post('/vehiculos' , agregarVehiculosPOST );
vehiculosRouter.get('/vehiculos' , obtenerVehiculosGET )
vehiculosRouter.delete('/vehiculos/:id' , eliminarVehiculoDELETE)
vehiculosRouter.put('/vehiculos/:id' , actualizarVehiculoPUT )

export default vehiculosRouter