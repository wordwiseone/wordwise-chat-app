import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ChatContainer from './components/ChatContainer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ChatContainer />
      </div>
    </div>
  )
}

export default App