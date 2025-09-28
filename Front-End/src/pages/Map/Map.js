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
    const mockUnidades = [
        {
        nombre: 'Hospital Central',
        direccion: 'Av. Bolívar, Managua',
        lat: 12.1368,
        lng: -86.2510,
        tipo: 'hospital',
        servicios: ['Urgencias', 'Pediatría', 'Cirugía']
        },
        {
        nombre: 'Clínica Vida',
        direccion: 'Calle 10, Managua',
        lat: 12.1375,
        lng: -86.2495,
        tipo: 'clinica',
        servicios: ['Medicina General', 'Laboratorio']
        },
        {
        nombre: 'Centro de Salud Sur',
        direccion: 'Zona Sur, Managua',
        lat: 12.1342,
        lng: -86.2532,
        tipo: 'centro',
        servicios: ['Vacunación', 'Consulta Externa']
        },
        {
        nombre: 'Hospital Infantil',
        direccion: 'Colonia Centroamérica',
        lat: 12.1390,
        lng: -86.2480,
        tipo: 'hospital',
        servicios: ['Pediatría', 'Neonatología']
        }
    ];

    setUnidades(mockUnidades);
    }, []);

    // useEffect(() => {
    //     fetch('https://tu-api.com/unidades')
    //         .then(res => res.json())
    //         .then(data => setUnidades(data));
    // }, []);

    const unidadesFiltradas = userLocation
        ? unidades
            .map(u => ({
                ...u,
                distancia: getDistance(userLocation.lat, userLocation.lng, u.lat, u.lng)
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