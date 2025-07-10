import React from 'react'
import { useParams } from 'react-router'
import contacts from '../../Data/contacts.js'
import { useState } from 'react'
import './ChatScreen.css';



const ChatScreen = () => {
    const { contact_id } = useParams();
    let contact_selected= null
    for( const contact of contacts){
        if(Number(contact.id) === Number(contact_id)){
            contact_selected = contact
        }
    }
    
    const [messages, setMessages] = useState(contact_selected.messages);

    const handleSubmitNewMessage = (e) => {
        e.preventDefault()

        const message = e.target.message.value
        const newMessage = {
            emisor: 'YO',
            hora: '18:49',
            id: messages.length + 1,
            texto: message,
            status: 'no-visto'
        }
        const new_messages= [...messages]
        new_messages.push(newMessage)
        setMessages(new_messages)
    }
  return (
    <div className='chat-screen'>
        {messages.map(message => {
            return (
                <>
                <div className='contact-text-container'>

                    <div className='contact-text' key={message.id}>
                        <p> {message.emisor} </p>
                        <p> {message.texto} </p>
                    </div>
                
                    <div className='contact-text-info' key={message.id}>
                        <p> {message.hora} </p>
                        <p> {message.status} </p>
                    </div>
                    
                    
                    </div>
                    <hr />
                    </>
                
            )
        } )}
    <form className='input-section' onSubmit={handleSubmitNewMessage}>
        <input className='input-chat' type="text" placeholder='Escribe tu mensaje' id='message' name='message' />
        <button className='buttom-send' type='submit'> 💬 </button>
    </form>

    </div>
  )
}

export default ChatScreen