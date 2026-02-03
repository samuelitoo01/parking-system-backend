import { obtenerIngresosGET , agregarIngreso , registrarSalida } from '../controllers/ingresos.controllers.js'
import Router from 'express'

const routerIngresos = Router();

routerIngresos.get('/ingresos' , obtenerIngresosGET )
routerIngresos.post('/ingresos' , agregarIngreso )
routerIngresos.post('/salidas/:id' , registrarSalida )
export default routerIngresos