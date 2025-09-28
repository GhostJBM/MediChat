import { useState } from 'react';
import TipCard from '../../components/Tip/Tip';
import TipFilter from '../../components/TipFilter/TipFilter';
import './TipList.css'

const TipsList = () => {
    const consejos = [
        {
            _id: "1",
            titulo: "Cuidado de la salud mental",
            descripcion: "Expresar emociones, meditar y mantener una actitud positiva para fortalecer el bienestar emocional.",
            categoria: "Salud Mental",
            PublicoObjetivo: ["Jóvenes", "Adultos", "Niños"],
            tags: ["salud mental", "bienestar", "emociones"]
        },
        {
            _id: "2",
            titulo: "Hidratación diaria",
            descripcion: "Tomar al menos 8 vasos de agua al día mejora la concentración y la energía.",
            categoria: "Nutrición",
            PublicoObjetivo: ["Adultos", "Niños"],
            tags: ["agua", "nutrición", "energía"]
        },
        {
            _id: "3",
            titulo: "Protección solar",
            descripcion: "Usar protector solar previene el envejecimiento prematuro y el cáncer de piel.",
            categoria: "Prevención",
            PublicoObjetivo: ["Todos"],
            tags: ["piel", "prevención", "protección"]
        }
    ];

    const categorias = ['Todos', ...new Set(consejos.map(c => c.categoria))];
    const [selected, setSelected] = useState('Todos');

    const filtrados = selected === 'Todos'
        ? consejos
        : consejos.filter(c => c.categoria === selected);

    return (
        <div className="tips-list-wrapper">
        <h2 className='titulo'>Consejos de Salud</h2>
        <TipFilter categorias={categorias} selected={selected} onSelect={setSelected} />
        <div className="tips-grid">
            {filtrados.map(c => <TipCard key={c._id} {...c} />)}
        </div>
        </div>
    );
    };

    export default TipsList;