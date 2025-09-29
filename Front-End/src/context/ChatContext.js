import { createContext, useState } from 'react';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async (text) => {
        const newMsg = { text, sender: 'user', timestamp: Date.now() };
        setMessages((prev) => [...prev, newMsg]);

        try {
            const res = await fetch('http://localhost:5500/API/chatBot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({    
                mensaje: text,
                sessionId: 'Josiel'
                })
            });

            const data = await res.json();
            console.log('Respuesta del backend:', data)

            const botMsg = {
                text: data.respuesta,
                sender: 'bot',
                timestamp: Date.now()
            };

            setMessages((prev) => [...prev, botMsg]);
        } catch (error) {
            console.error('Error al conectar con el chatbot:', error);
            setMessages((prev) => [
                ...prev,
                {
                    text: 'Hubo un error al obtener respuesta del bot.',
                    sender: 'bot',
                    timestamp: Date.now()
                }
            ]);
        }
    };

    return (
        <ChatContext.Provider value={{ messages, sendMessage, isOpen, setIsOpen }}>
            {children}
        </ChatContext.Provider>
    );
}
