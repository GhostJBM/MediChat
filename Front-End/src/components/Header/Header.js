import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoheader from '../../assets/logo.png';

const Header = () => {
const [horaActual, setHoraActual] = useState('');

    useEffect(() => {
        const actualizarHora = () => {
        const ahora = new Date();
        const hora = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setHoraActual(hora);
        };

        actualizarHora(); // inicial
        const intervalo = setInterval(actualizarHora, 60000); // actualiza cada minuto

        return () => clearInterval(intervalo);
    }, []);


    return (
        <header className="header">
        <div className="branding">
            <Link to="/" className="home-link">
                <img src={logoheader} alt="Logo" className="logoheader" />
                <h2 className="app-name">MediChat</h2>
            </Link>

        </div>
        <nav className="nav">
            <Link to="/">Inicio</Link>
            <Link to="/mapa">Unidades Cercanas</Link>
            <Link to="/calendario">Calendario de Eventos y Ferias</Link>
            <Link to="/consejos">Consejos de salud</Link>
            <span className="hora">{horaActual}</span>
        </nav>
    </header>

    );
};

export default Header;