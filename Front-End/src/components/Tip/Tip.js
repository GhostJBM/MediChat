import './Tip.css';

const TipCard = ({ titulo, descripcion, categoria, PublicoObjetivo, tags }) => (
    <div className="tip-card">
        <h3 className="tip-title">{titulo}</h3>
        <p className="tip-description">{descripcion}</p>
        <p className="tip-category"><strong>Categoría:</strong> {categoria}</p>
        <p className="tip-audience"><strong>Dirigido a:</strong> {PublicoObjetivo.join(', ')}</p>
        <div className="tip-tags">
            {tags.map((tag, i) => (
                <span key={i} className="tip-tag">{tag}</span>
            ))}
        </div>
    </div>
);

export default TipCard;