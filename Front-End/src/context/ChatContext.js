// src/context/ChatContext.js
import { createContext, useState } from 'react';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = (text) => {
    const newMsg = { text, sender: 'user', timestamp: Date.now() };
    setMessages((prev) => [...prev, newMsg]);

    // Simular respuesta del bot
    setTimeout(() => {
        setMessages((prev) => [
        ...prev,
        { text: 'Respuesta médica simulada', sender: 'bot', timestamp: Date.now() },
        ]);
    }, 1000);
    };

    return (
    <ChatContext.Provider value={{ messages, sendMessage, isOpen, setIsOpen }}>
        {children}
    </ChatContext.Provider>
    );
}
