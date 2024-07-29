const express = require('express');
const app = express();
require('dotenv').config();
const placesRoutes = require('./routes/placesRoutes')
const port = process.env.port || 3000

//Habilita el manejo de información en onbjetos json
app.use(express.json());
//Habilita el envio de datos en Formato URL-encoded desde Postman
app.use(express.urlencoded({ extended: true }));
//se crea la ruta base y el router
app.use('/api/places', placesRoutes)

//Se inicia el servidor
app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})