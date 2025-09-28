import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const MapaUnidades = ({ unidades, userLocation, unidadDestacada }) => {
    
    // Íconos personalizados
    const iconHospital = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const iconClinica = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const iconCentro = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const iconUsuario = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [30, 45],
        iconAnchor: [15, 45],
        popupAnchor: [1, -34],
        shadowSize: [45, 45]
    });

    return (
            <div style={{
                position: 'relative',
                height: '400px',
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden'
            }}>
                {/* leyenda guía */}
            <div className="leyenda">
                <p><span style={{ color: 'red' }}>⬤</span> Hospital</p>
                <p><span style={{ color: 'green' }}>⬤</span> Clínica</p>
                <p><span style={{ color: 'orange' }}>⬤</span> Centro de Salud</p>
                <p><span style={{ color: 'yellow' }}>⬤</span> Unidad más cercana</p>
                <p><span style={{ color: 'blue' }}>⬤</span> Tu ubicación</p>
            </div>
            <MapContainer center={[unidadDestacada.lat, unidadDestacada.lng]} zoom={14} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {userLocation && (
                    <Marker position={[userLocation.lat, userLocation.lng]} icon={iconUsuario}>
                        <Popup>Tu ubicación</Popup>
                    </Marker>
                )}

                {unidades.map((unidad, i) => {
                    const esDestacada = unidadDestacada && unidad.nombre === unidadDestacada.nombre;

                    let icon;
                    if (esDestacada) {
                        icon = new L.Icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
                        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                        iconSize: [30, 50],
                        iconAnchor: [15, 50],
                        popupAnchor: [1, -34],
                        shadowSize: [50, 50]
                        });
                    } else if (unidad.tipo === 'hospital') icon = iconHospital;
                    else if (unidad.tipo === 'clinica') icon = iconClinica;
                    else icon = iconCentro;

                    return (
                        <Marker key={i} position={[unidad.lat, unidad.lng]} icon={icon}>
                        <Popup>
                            <strong>{unidad.nombre}</strong><br />
                            {unidad.direccion}<br />
                            {unidad.servicios?.join(', ')}
                        </Popup>
                        </Marker>
                    );
                })}

                {/* Línea entre el la ubicación del usuario y la unidad destacada(la más cercana) */}
                {userLocation && unidadDestacada && (
                    <Polyline
                    positions={[
                        [userLocation.lat, userLocation.lng],
                        [unidadDestacada.lat, unidadDestacada.lng]
                    ]}
                        color="gold"
                        weight={4}
                    />
                )}

                {/* Botón para ubicarse */}
                {userLocation && <BotonUbicarme userLocation={userLocation} />}
            </MapContainer>
        </div>
    );
};
    // botón de ubicarse
    const BotonUbicarme = ({ userLocation }) => {
        const map = useMap();

        const handleClick = () => {
            if (userLocation) {
            map.flyTo([userLocation.lat, userLocation.lng], 14, {
                animate: true,
                duration: 1.5
            });
            }
        };

        return (
            <button className="btn-ubicarme" onClick={handleClick}>
            📍 Ubicarme
            </button>
        );
        };

export default MapaUnidades;
