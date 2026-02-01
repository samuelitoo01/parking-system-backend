import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();

const conectionDb = mysql2.createPool({

	host : 'localhost',
	user : 'root', 
	password : '', 
	database : 'parqueadero'

});

export default conectionDb 