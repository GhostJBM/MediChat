import TipCard from '../../components/Tip/Tip';
import './CarruselTips.css';
import { Link } from 'react-router-dom';

    const CarruselTips = ({ consejos }) => (
    <div className="carrusel-wrapper">
        <h2>Consejos destacados</h2>
            <div className="carrusel-scroll">
            {consejos.map(c => (
                <TipCard key={c._id} {...c} />
            ))}
            </div>
            <div className="ver-todos-wrapper">
                <Link to="/consejos" className="ver-todos-link">
                    Ver todos los consejos →
                </Link>
            </div>
    </div>
    
    );

export default CarruselTips;
