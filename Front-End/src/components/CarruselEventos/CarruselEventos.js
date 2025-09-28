import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CarruselEventos.css';

const CarruselEventos = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const eventosRaw = [
        {
            nombre: "Jornada de Vacunación Infantil",
            descripcion: "Campaña de vacunación para niños menores de 5 años.",
            fechaInicio: "2025-10-01T00:00:00.000Z",
            fechaFin: "2025-10-05T00:00:00.000Z",
            tipo: "Campaña de vacunación"
        },
        {
            nombre: "Jornada de Vacunación Infantil",
            descripcion: "Campaña de vacunación para niños menores de 5 años.",
            fechaInicio: "2025-10-01T00:00:00.000Z",
            fechaFin: "2025-10-05T00:00:00.000Z",
            tipo: "Campaña de vacunación"
        },
        {
            nombre: "Jornada de Vacunación Infantil",
            descripcion: "Campaña de vacunación para niños menores de 5 años.",
            fechaInicio: "2025-10-01T00:00:00.000Z",
            fechaFin: "2025-10-05T00:00:00.000Z",
            tipo: "Campaña de vacunación"
        },
        {
            nombre: "Jornada de Vacunación Infantil",
            descripcion: "Campaña de vacunación para niños menores de 5 años.",
            fechaInicio: "2025-10-01T00:00:00.000Z",
            fechaFin: "2025-10-05T00:00:00.000Z",
            tipo: "Campaña de vacunación"
        },
        {
            nombre: "Jornada de Vacunación Infantil",
            descripcion: "Campaña de vacunación para niños menores de 5 años.",
            fechaInicio: "2025-10-01T00:00:00.000Z",
            fechaFin: "2025-10-05T00:00:00.000Z",
            tipo: "Campaña de vacunación"
        },
        {
            nombre: "Feria de Salud Preventiva",
            descripcion: "Charlas y chequeos médicos gratuitos.",
            fechaInicio: "2025-10-02T00:00:00.000Z",
            fechaFin: "2025-10-03T00:00:00.000Z",
            tipo: "Charlas educativas"
        }
        ];

        const hoy = new Date();
        const proximos = eventosRaw.filter(e => new Date(e.fechaFin) >= hoy);
        setEventos(proximos);
    }, []);

    const EventoCard = ({ nombre, descripcion, fechaInicio, fechaFin, tipo }) => (
        <div className="evento-card">
            <h3 className="evento-titulo">{nombre}</h3>
            <p><strong>📅 Del:</strong> {new Date(fechaInicio).toLocaleDateString()} <strong>al</strong> {new Date(fechaFin).toLocaleDateString()}</p>
            <p><strong>🏥 Tipo:</strong> {tipo}</p>
            <p className="evento-descripcion">{descripcion}</p>
        </div>
    );

    return (
        <div className="carrusel-wrapper">
            <h2>Próximas clínicas móviles</h2>
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