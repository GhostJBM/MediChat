import CarruselTips from '../../components/CarruselTips/CarruselTips';
import CarruselEventos from '../../components/CarruselEventos/CarruselEventos';
import './Home.css'

const destacados = [
    {
        _id: "1",
        titulo: "Cuidado de la salud mental",
        descripcion: "Expresar emociones, meditar y mantener una actitud positiva.",
        categoria: "Salud Mental",
        PublicoObjetivo: ["Jóvenes", "Adultos"],
        tags: ["salud mental", "bienestar"]
    },
    {
        _id: "2",
        titulo: "Hidratación diaria",
        descripcion: "Tomar al menos 8 vasos de agua al día.",
        categoria: "Nutrición",
        PublicoObjetivo: ["Adultos", "Niños"],
        tags: ["agua", "energía"]
    },
    {
        _id: "2",
        titulo: "Hidratación diaria",
        descripcion: "Tomar al menos 8 vasos de agua al día.",
        categoria: "Nutrición",
        PublicoObjetivo: ["Adultos", "Niños"],
        tags: ["agua", "energía"]
    },{
        _id: "2",
        titulo: "Hidratación diaria",
        descripcion: "Tomar al menos 8 vasos de agua al día.",
        categoria: "Nutrición",
        PublicoObjetivo: ["Adultos", "Niños"],
        tags: ["agua", "energía"]
    },{
        _id: "2",
        titulo: "Hidratación diaria",
        descripcion: "Tomar al menos 8 vasos de agua al día.",
        categoria: "Nutrición",
        PublicoObjetivo: ["Adultos", "Niños"],
        tags: ["agua", "energía"]
    },
    {
        _id: "3",
        titulo: "Protección solar",
        descripcion: "Usar protector solar previene el envejecimiento prematuro.",
        categoria: "Prevención",
        PublicoObjetivo: ["Todos"],
        tags: ["piel", "protección"]
    }
];

const Home = () => (
    <div className="home-wrapper">
        <h1>Bienvenido a MediChat</h1>
        <p>Tu espacio para cuidar la salud con información clara y accesible.</p>

        <p className="intro-mensaje">
            En MediChat creemos que la salud empieza con información clara, accesible y cercana.
        </p>
        {/* carrusel de consejos */}
        <CarruselTips consejos={destacados} />

        {/* carrusel eventos */}
        <h2 className="seccion-titulo">¿Cuándo se harán las clínica móviles?</h2>
        <CarruselEventos />
        
        <section className="funcionalidades-home">
            <h2 className="seccion-titulo">¿Qué puedo hacer en MediChat?</h2>
            <ul className="funcionalidades-lista">
                <li>
                💡 <strong>Recibir consejos prácticos</strong><br />
                    Descubrí tips diarios para mejorar tu salud y bienestar.
                </li>
                <li>
                📍 <strong>Ubicar unidades de salud</strong><br />
                    Encontrá unidades cercanas.
                </li>
                <li>
                🗓️ <strong>Consultar el calendario médico</strong><br />
                    Accedé a jornadas de vacunación, chequeos y más.
                </li>
                <li>
                🧠 <strong>Hablar con el asistente virtual</strong><br />
                    Presentá tus consultas al ChatBot inteligente
                </li>
            </ul>
        </section>

    </div>
);

export default Home;