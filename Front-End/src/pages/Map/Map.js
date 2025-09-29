import { useEffect, useState } from 'react';
// import MapaUnidades from '../../components/Map/Map';
import MapaGoogle from '../../components/Map/MapGoogle';
import './Map.css'

const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const Maps = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [unidades, setUnidades] = useState([]);
    const [filtroTipo, setFiltroTipo] = useState('');


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
        (pos) => {
            const { latitude, longitude } = pos.coords;
            setUserLocation({ lat: latitude, lng: longitude });
        },
        (err) => {
            console.error("Error al obtener ubicación:", err);
        }
        );
    }, []);

    

useEffect(() => {
    if (userLocation) {
        const { lat, lng } = userLocation;
        const radius = 5000;

        const url = `http://localhost:5500/API/MapHospitales`

        fetch(url,{
            method: 'POST',  
            headers: {
                    'Content-Type': 'application/json'},
            body: JSON.stringify({
                lat: userLocation.lat,
                lng: userLocation.lng,
                radius: 5000
            })
        })
            .then(res => res.json())
            .then(data => setUnidades(data))
            .catch(err => console.error("Error al obtener unidades desde la API:", err));
    }
}, [userLocation]);



    // useEffect(() => {
    //     fetch('https://tu-api.com/unidades')
    //         .then(res => res.json())
    //         .then(data => setUnidades(data));
    // }, []);

    const unidadesFiltradas = userLocation
    ? unidades
        .map(u => ({
            ...u,
            lat: u.location?.lat,
            lng: u.location?.lng,
            distancia: getDistance(userLocation.lat, userLocation.lng, u.location?.lat, u.location?.lng)
        }))
        .filter(u => filtroTipo === '' || u.tipo === filtroTipo)
    : [];
        
    const unidadMasCercana = userLocation && unidadesFiltradas.length > 0
        ? unidadesFiltradas.sort((a, b) => a.distancia - b.distancia)[0]
        : null;


    return (
        <div className="map-container">
            <h1 className="titulo">Unidades de Salud Cercanas</h1>

            {userLocation && (
                <div className="filtro-box">
                    <label htmlFor="tipo">Filtrar por tipo:</label>
                    <select
                        id="tipo"
                        value={filtroTipo}
                        onChange={(e) => setFiltroTipo(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="hospital">Hospital</option>
                    <option value="clinica">Clínica</option>
                    <option value="centro">Centro de Salud</option>
                    </select>
                </div>
            )}

            {unidadMasCercana && (
            <div className="unidad-cercana">
                <h3>
                    Unidad más cercana{' '}
                    {unidadMasCercana.tipo === 'hospital' ? '🏥' :
                    unidadMasCercana.tipo === 'clinica' ? '🩺' :
                    unidadMasCercana.tipo === 'centro' ? '🏣' : '📍'}
                </h3>
                <p><strong>{unidadMasCercana.nombre}</strong></p>
                <p>{unidadMasCercana.direccion}</p>
                <p>📍 A {unidadMasCercana.distancia.toFixed(2)} km de tu ubicación</p>
            </div>
            )}



            {userLocation && (
                <MapaGoogle 
                unidades={unidadesFiltradas} 
                userLocation={userLocation} 
                unidadDestacada={unidadesFiltradas.length > 0 ? unidadMasCercana : null}
                />
            )}
        </div>
        );
}

export default Maps;