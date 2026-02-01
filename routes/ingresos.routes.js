import { obtenerIngresosGET , agregarIngreso } from '../controllers/ingresos.controllers.js'
import Router from 'express'

const routerIngresos = Router();

routerIngresos.get('/ingresos' , obtenerIngresosGET )
routerIngresos.post('/ingresos' , agregarIngreso )

export default routerIngresos