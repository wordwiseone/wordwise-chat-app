import React, { useState } from 'react'

const tabs = ['All', 'Direct', 'Unread']
const initialChats = [
  { id: 1, name: 'Rohit', lastMessage: 'Hello!' },
  { id: 2, name: 'Dheeraj', lastMessage: 'How are you?' }
]

function ChatList({ setActiveChat }) {
  const [activeTab, setActiveTab] = useState('All')
  const [chats] = useState(initialChats)

  return (
    <div className="chat-list">
      <div className="chat-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {chats.map((chat) => (
          <div key={chat.id} className="chat-item" onClick={() => setActiveChat(chat)}>
            <h3>{chat.name}</h3>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatList