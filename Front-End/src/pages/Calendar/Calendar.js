import { useEffect, useState } from 'react';
import './Calendar.css';
import { useMemo } from 'react';

    console.log('Calendar montado');

function Calendar() {
    
const [eventosRaw, setEventosRaw] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5500/API/calendario')
    .then(res => res.json()) 
    .then(data => {
      console.log('Eventos recibidos:', data);
      setEventosRaw(data.Calendario);
    })
      .catch(err => console.error('Error al cargar eventos:', err));
  }, []);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const hoy = new Date().toISOString().split('T')[0];

    const getIcon = (tipo) => {
        if (tipo.includes('vacunación')) return '💉';
        if (tipo.includes('Charlas')) return '📢';
        if (tipo.includes('donación')) return '🩸';
    return '📅'; // genérico
    };


    

const eventos = useMemo(() => {
    const map = {};
    eventosRaw.forEach(ev => {
      const start = new Date(ev.fechaInicio);
      const end = new Date(ev.fechaFinal);

      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const fecha = d.toISOString().split('T')[0];
        if (!map[fecha]) map[fecha] = [];
        map[fecha].push({
          id: `${ev.Nombre}-${fecha}`,
          title: ev.Nombre,
          descripcion: ev.descripcion,
          tipo: ev.tipo
        });
      }
    }); 
    return map;
  }, [eventosRaw]);
    
    const handleClick = (formattedDate, event) => {
        if (eventos[formattedDate]) {
            const rect = event.target.getBoundingClientRect();
            setModalPosition({
            top: rect.top + window.scrollY,
            left: rect.left + rect.width / 2,
        });
        setSelectedDate(Array.isArray(eventos[formattedDate]) ? eventos[formattedDate] : [eventos[formattedDate]]);
        setShowModal(true);
    }
};


    return (
        <div className="calendar-wrapper">
            <h1 className="titulo">Calendario de Eventos y Ferias</h1>
            <div className="calendar-toolbar">
                <button onClick={() => setCurrentMonth(new Date())}>Hoy</button>
            </div>

            <div className="calendar-header">
                <button onClick={() => {
                const prev = new Date(currentMonth);
                prev.setMonth(prev.getMonth() - 1);
                setCurrentMonth(prev);
            }}>◀</button>

            <h2>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
            
            <button onClick={() => {
                const next = new Date(currentMonth);
                next.setMonth(next.getMonth() + 1);
                setCurrentMonth(next);
            }}>▶</button>
        </div>

        <div className="calendar-grid">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day) => (
                <div key={day} className="calendar-day">{day}</div>
            ))}

            {(() => {
                const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
                const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
                const offset = (firstDayOfMonth + 6) % 7;

                return (
                    <>
                        {Array.from({ length: offset }, (_, i) => (
                            <div key={`blank-${i}`} className="calendar-date empty" />
                        ))}

                        {Array.from({ length: daysInMonth }, (_, i) => {
                            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
                            const formattedDate = date.toISOString().split('T')[0];
                            const hasEvent = eventos[formattedDate];

                            return (
                                <div
                                    key={formattedDate}
                                    className={`calendar-date 
                                        ${hasEvent ? 'has-event' : ''} 
                                        ${hasEvent?.length > 1 ? 'collision' : ''}
                                        ${formattedDate === hoy ? 'hoy' : ''}
                                        `}
                                        
                                    onClick={(e) => handleClick(formattedDate, e)}
                                >
                                    {i + 1}
                                    {hasEvent && (
                                        <div className="event-icons">
                                            {hasEvent.slice(0, 3).map((ev, i) => (
                                                <span key={i}>{getIcon(ev.tipo)}</span>
                                            ))}
                                            {hasEvent.length > 3 && <span>+{hasEvent.length - 3}</span>}
                                        </div>
                                    )}

                                    {hasEvent?.length > 1 && (
                                        <span className="event-count">{hasEvent.length}</span>
                                    )}

                                </div>
                            );
                        })}
                    </>
                );
            })()}
        </div>


        {/* Modal */}
        {showModal && (
            <div
                className="modal-backdrop"
                onClick={() => setShowModal(false)}
            >
                <div
                className="modal-content"
                style={{
                    '--top': `${modalPosition.top}px`,
                    '--left': `${modalPosition.left}px`,
                }}
                onClick={(e) => e.stopPropagation()} // evita que se cierre si tocás dentro
                >
                {Array.isArray(selectedDate) && selectedDate.length > 0 ? (
                    selectedDate.map((ev, i) => (
                        <div key={ev.id}>
                            <h3>{getIcon(ev.tipo)} {ev.title}</h3>
                            <p>{ev.descripcion}</p>
                            {/* <p>🕒 {ev.hora}</p> */}
                            <p>🩺 Tipo: {ev.tipo}</p>
                            {i < selectedDate.length - 1 && <hr />}
                        </div>
                    ))
                    ) : (
                    <p>No hay eventos para este día.</p>
                )}
                    <button onClick={() => setShowModal(false)}>Cerrar</button>
                </div>
            </div>
        )}
        </div>
    );
}

export default Calendar;