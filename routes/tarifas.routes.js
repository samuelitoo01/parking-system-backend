import Router from 'express' ; 
import { obtenerTarifaGET } from '../controllers/tarifas.controllers.js'
const router = Router();

router.get('/tarifas' , obtenerTarifaGET )

export default router