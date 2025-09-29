import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CarruselEventos.css';

const CarruselEventos = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/API/calendario')
            .then(res => res.json()) 
            .then(data => {
                console.log('Eventos recibidos:', data);
                const hoy = new Date();
                const proximos = data.Calendario.filter(e => new Date(e.fechaFinal) >= hoy);
                setEventos(proximos);
            })
            .catch(err => console.error('Error al cargar eventos:', err));
    }, []);

    const EventoCard = ({ Nombre, descripcion, fechaInicio, fechaFinal, tipo }) => (
        <div className="evento-card">
            <h3 className="evento-titulo">{Nombre}</h3>
            <p><strong>📅 Del:</strong> {new Date(fechaInicio).toLocaleDateString()} <strong>al</strong> {new Date(fechaFinal).toLocaleDateString()}</p>
            <p><strong>🏥 Tipo:</strong> {tipo}</p>
            <p className="evento-descripcion">{descripcion}</p>
        </div>
    );

    return (
        <div className="carrusel-wrapper">
            <h2>Próximos Eventos y ferias</h2>
            <div className="carrusel-scroll">
                {eventos.map((e, i) => (
                    <EventoCard key={i} {...e} />
                ))}
            </div>
            <div className="ver-todos-wrapper">
                <Link to="/calendario" className="ver-todos-link">
                    Ver calendario completo →
                </Link>
            </div>
        </div>
    );
};

export default CarruselEventos;
