import React from 'react'
import contacts from '../../Data/contacts.js'
import { Link } from 'react-router'
import './ContactScreen.css'

const ContactScreen = () => {
  return (
    <>
      <h1 className='header-contactos'>Contactos:</h1>
      <div className='contact-container'>
        {
            contacts.map(contact =>{
                return(
                    <Link to={`/contact/${contact.id}`} className='contact' key={contact.id}>
                        <div className='contact-info-container'>
                    <img className='imagen-contacto' src={contact.img} alt={contact.name} />
                        <div className='contact-info'>
                            <h2> {contact.name} </h2>
                            <p>
                                {contact.last_time_connected}
                            </p>
                        </div>
                        </div>
                        
                        <hr />
                    </Link>
                )
            }
        )
        }
      </div>
    </>
  )
}

export default ContactScreen