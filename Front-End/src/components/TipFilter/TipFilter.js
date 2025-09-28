import './TipFilter.css';

const TipFilter = ({ categorias, selected, onSelect }) => (
    <div className="tip-filter">
        {categorias.map(cat => (
        <button
            key={cat}
            className={`filter-btn ${selected === cat ? 'active' : ''}`}
            onClick={() => onSelect(cat)}
        >
            {cat}
        </button>
        ))}
    </div>
    );

export default TipFilter;