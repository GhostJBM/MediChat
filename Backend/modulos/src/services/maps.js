import { Client } from "@googlemaps/google-maps-services-js";
import dotenv from "dotenv"

//configuracion  de la apinp
dotenv.config();
const client = new Client({})

export async function BuscarHospitales(lat, lng, radius = 5000) {
    try{
        const apiKey = "Ingrese su key de google Maps aquí"

        const Url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&keyword=hospital&key=${apiKey}`;


        const response = await fetch( Url)
        const data = await response.json();

        if(data.status === "OK"){
            return data.results.map(place =>({
            name: place.name,
            address: place.vicinity,
            location: place.geometry.location,
            place_id: place.place_id
            }))
        }else {
            throw new Error("Error en el lugar de origen: " + data.status);
        }
    }
    catch(err){
        console.error(err.message);
        throw err;
    }
}