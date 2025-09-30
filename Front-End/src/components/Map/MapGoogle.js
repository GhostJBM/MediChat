import { GoogleMap, Marker, Polyline, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { useState, useEffect, useRef } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const MapaGoogle = ({ unidades, userLocation, unidadDestacada }) => {
    const [selectedUnidad, setSelectedUnidad] = useState(null);
    const [mostrarUbicacion, setMostrarUbicacion] = useState(true);
    const mapRef = useRef(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'Ingrese su Key de google Maps Aquí',
    });

    useEffect(() => {
        if (selectedUnidad && !unidades.some(u => u.nombre === selectedUnidad.nombre)) {
            setSelectedUnidad(null);
        }
    }, [unidades, selectedUnidad]);

    const center = userLocation || { lat: 12.1364, lng: -86.2514 };

    return (
        <div style={{ position: 'relative', height: '400px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
        <div className="leyenda">
            <p><span style={{ color: 'red' }}>⬤</span> Hospital</p>
            <p><span style={{ color: 'green' }}>⬤</span> Clínica</p>
            <p><span style={{ color: 'orange' }}>⬤</span> Centro de Salud</p>
            <p><span style={{ color: 'yellow' }}>⬤</span> Unidad más cercana</p>
            <p><span style={{ color: 'blue' }}>⬤</span> Tu ubicación</p>
        </div>

        {isLoaded ? (
            <GoogleMap  
            key={unidadDestacada?.nombre || 'mapa-base'}
            mapContainerStyle={containerStyle} center={center} zoom={14} 
            options={{ disableDefaultUI: true, zoomControl: true }}
            onLoad={map => (mapRef.current = map)}
            >
            {userLocation && (
                <>
                <Marker
                    position={userLocation}
                    icon="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png"
                    onClick={() => setMostrarUbicacion(true)}
                />
                {mostrarUbicacion && (
                    <InfoWindow position={userLocation} onCloseClick={() => setMostrarUbicacion(false)}>
                    <div><strong>Tu ubicación</strong></div>
                    </InfoWindow>
                )}
                </>
            )}

            {unidades.map((unidad, i) => {
                let iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png';
                if (unidad.tipo === 'hospital') iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png';
                else if (unidad.tipo === 'clinica') iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png';
                if (unidadDestacada?.nombre === unidad.nombre) iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png';

            return (
                <Marker
                    key={unidad.nombre}
                    position={{ lat: unidad.lat, lng: unidad.lng }}
                    icon={iconUrl}
                    onClick={() => setSelectedUnidad(unidad)}
                />
                );
            })}

            {selectedUnidad && (
                <InfoWindow position={{ lat: selectedUnidad.lat, lng: selectedUnidad.lng }} onCloseClick={() => setSelectedUnidad(null)}>
                <div style={{ maxWidth: '200px' }}>
                    <strong>{selectedUnidad.nombre}</strong><br />
                    {selectedUnidad.direccion}<br />
                    {selectedUnidad.servicios?.join(', ')}
                </div>
                </InfoWindow>
            )}

            {userLocation && unidadDestacada &&
                unidades.some(u => u.nombre === unidadDestacada.nombre) && (
                <Polyline
                    path={[userLocation, { lat: unidadDestacada.lat, lng: unidadDestacada.lng }]}
                    options={{ strokeColor: 'gold', strokeWeight: 4, strokeOpacity: 0.8, geodesic: true }}
                />
            )}
            </GoogleMap>
        ) : (
            <div>Cargando mapa...</div>
        )}
            <button
                className="btn-ubicarme"
                onClick={() => {
                    if (mapRef.current && userLocation) {
                        mapRef.current.panTo(userLocation);
                            setTimeout(() => {
                                mapRef.current.setZoom(14); // o 15 si querés más cerca
                            }, 500);
                    }
                }}
            >
                📍 Ubicarme
            </button>
        </div>
    );
};

export default MapaGoogle;