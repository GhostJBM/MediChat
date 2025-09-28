import { useState, useRef, useEffect, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './FloatingChat.css';
import mascota from '../../assets/mascota.png';

export default function FloatingChat() {
    const { isOpen, setIsOpen, messages, sendMessage } = useContext(ChatContext);
    const bubbleRef = useRef(null);
    const [position, setPosition] = useState({ x: '90vw', y: '80vh'});
    const [dragging, setDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });
    const wasDragging = useRef(false);
    // Para la posición de apertura del chat
    const [panelDirection, setPanelDirection] = useState({ x: 'right', y: 'down' });
    //Para cerrar con click fuera del chat
    const panelRef = useRef(null);


    const handleMouseDown = (e) => {
        setDragging(true);
        const rect = bubbleRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    useEffect(() => {
        // Manejo de drag
        const handleMouseMove = (e) => {
            if (!dragging) return;
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        wasDragging.current = true;
        };

        const handleMouseUp = () => {
            setDragging(false);
            setTimeout(() => {
                wasDragging.current = false;
            }, 0);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);

    useEffect(() => {
    // Cálculo de dirección del panel
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const margin = 500;

        let xDir = 'right';
        let yDir = 'down';

        if (position.x > screenWidth - margin) {
            xDir = 'left';
        } else if (position.x < margin) {
            xDir = 'right';
        }

        if (position.y > screenHeight - margin) {
            yDir = 'up';
        } else if (position.y < margin) {
            yDir = 'down';
        }

        setPanelDirection({ x: xDir, y: yDir });
    }, [position]);

    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
    const handleClickOutside = (e) => {
        if (
            isOpen &&
            panelRef.current &&
            !panelRef.current.contains(e.target) &&
            bubbleRef.current &&
            !bubbleRef.current.contains(e.target)
        ){
            setIsOpen(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [isOpen, setIsOpen]);


    return (
    <>
        <div
            ref={bubbleRef}
            title = "Asistente virtual"
            className="chat-bubble"
            onClick={() => {
                if (!wasDragging.current) {
                    setIsOpen((prev) => !prev);
                }
            }}

            onMouseDown={handleMouseDown}
            style={{
                left: position.x,
                top: position.y,
                position: 'fixed',
                cursor: dragging ? 'grabbing' : 'grab',
            }}
        >
        <img
            src={mascota}
            alt="Chatbot"
            className="chat-icon"
            draggable="false"
        />

    {/* 💬 */}
        </div>

        {isOpen && (
            <div 
                ref={panelRef}
                className="chat-panel" 
                style={{
                position: 'fixed',
                left:
                    panelDirection.x === 'right'
                        ? position.x + 70
                        : panelDirection.x === 'left'
                        ? position.x - 300
                        : position.x,
                top:
                    panelDirection.y === 'down'
                        ? position.y + 70
                        : panelDirection.y === 'up'
                        ? position.y - 300
                        : position.y,
                zIndex: 3000,
                }}
            >
                <div className="chat-header">

                    <span>Asistente Virtual</span>
                    <button onClick={() => setIsOpen(false)}>✖</button>
                </div>
                <div className="chat-messages">
                    {messages.map((msg, i) => (
                        <div key={i} className={`chat-msg ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <ChatInput onSend={sendMessage} />
            </div>
        )}
    </>
    );
}

function ChatInput({ onSend }) {
    const [text, setText] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // evita que se envíe el formulario o haga salto de línea
            handleSend();       // llama a tu función de envío
        }
    };

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                title="Escribe tus consultas acá"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    );
}