import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'

function App() {

  return (
      <Routes>
        <Route path='/' element={<ContactScreen/>} />
        <Route path='/contact/:contact_id' element={<ChatScreen/>} />
      </Routes>
  )
}

export default App
