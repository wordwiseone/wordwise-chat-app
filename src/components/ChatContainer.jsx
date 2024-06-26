import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatArea from './ChatArea'

function ChatContainer() {
  const [activeChat, setActiveChat] = useState(null)

  return (
    <div className="chat-container">
      <ChatList setActiveChat={setActiveChat} />
      <ChatArea activeChat={activeChat} />
    </div>
  )
}

export default ChatContainer