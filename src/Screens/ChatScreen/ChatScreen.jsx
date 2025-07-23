import React, { useState } from 'react';
import { useParams } from 'react-router';
import contacts from '../../Data/contacts.js';
import './ChatScreen.css';

const ChatScreen = () => {
    const { contact_id } = useParams();
    const contact = contacts.find(c => Number(c.id) === Number(contact_id));
    const [messages, setMessages] = useState(contact ? contact.messages : []);
    const [input, setInput] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);

    const emojis = ['😊', '😂', '❤️', '👍', '🎉', '🔥', '😎', '🤔', '😢', '😡', '🥳', '🤗', '😴', '🤯', '😍', '😭'];

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        const newMessage = {
            emisor: 'YO',
            texto: input,
            id: messages.length + 1,
            hora: '18:49',
        };
        setMessages([...messages, newMessage]);
        setInput("");
    };

    const addEmoji = (emoji) => {
        setInput(input + emoji);
    };

    const toggleEmojis = () => {
        setShowEmojis(!showEmojis);
    };

    const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23cccccc'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";

    return (
        <div className="chat-screen">
            <div className="header-chat">
                <div className="header-left">
                    <img 
                        src={contact ? contact.img : defaultAvatar} 
                        alt="Foto de perfil" 
                        className="header-avatar"
                        onError={(e) => {
                            e.target.src = defaultAvatar;
                        }}
                    />
                    <span className="header-name">{contact ? contact.name : "Chat"}</span>
                </div>
                <div className="header-right">
                    <button className="header-icon">📞</button>
                    <button className="header-icon">📹</button>
                </div>
            </div>
            <div className="chat-container">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={
                            msg.emisor === 'YO' ? 'message sent' : 'message received'
                        }
                    >
                        {msg.texto}
                    </div>
                ))}
            </div>
            
            {showEmojis && (
                <div className="emoji-panel">
                    {emojis.map((emoji, index) => (
                        <button
                            key={index}
                            className="emoji-item"
                            onClick={() => addEmoji(emoji)}
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
            )}

            <form className="input-section" onSubmit={handleSend}>
                <button type="button" className="emoji-button" onClick={toggleEmojis}>
                    😊
                </button>
                <input
                    className="input-chat"
                    type="text"
                    placeholder="Escribe tu mensaje"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button className="buttom-send" type="submit">&#128172;</button>
            </form>
        </div>
    );
};

export default ChatScreen;