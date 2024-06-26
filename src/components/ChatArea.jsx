import React, { useState } from 'react'

function ChatArea({ activeChat }) {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'You' }])
      setInputMessage('')
    }
  }

  return (
    <div className="chat-area">
      <div className="message-list">
        {activeChat ? (
          <>
            <h3>Chat with {activeChat.name}</h3>
            {messages.map((msg, index) => (
              <p key={index}>{msg.sender}: {msg.text}</p>
            ))}
          </>
        ) : (
          <p>Select a chat to start messaging</p>
        )}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default ChatArea