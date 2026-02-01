import app from './server.js';
import router from './routes/tarifas.routes.js'
import vehiculosRouter from './routes/vehiculos.routes.js'
import routerIngresos from './routes/ingresos.routes.js'

app 
app.use('/' , router )
app.use('/' , vehiculosRouter )
app.use('/', routerIngresos )
app.use((req , res ) => {
	res.status(404).json({
		"message" : "Esta ruta no existe"
	})
})