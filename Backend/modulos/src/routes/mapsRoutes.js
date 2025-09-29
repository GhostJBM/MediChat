    import express from 'express'
    import { BuscarHospitales } from '../services/maps.js'

/*
Esta API debe recibir cordenadas en latitud y longitud, junto con 
*/

const routerMap = express.Router()

//End point de la api para buscar hospitales cercanos ruta de acceso /MapHospitales
routerMap.post('/MapHospitales', async (req, res) => {
    const {lat, lng, radius} = req.body;

        try{
            const places = await BuscarHospitales(Number(lat), Number(lng), radius ? Number(radius) : 5000);
            res.json(places)
        }
        catch(err){
            res.status(500).json({error : "Error buscando los hospitales"})
        }
})

export default routerMap;