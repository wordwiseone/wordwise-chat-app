import React from 'react'

const menuItems = ['Profile', 'Chats', 'Text Editor', 'Tasks', 'Settings', 'Logout']

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Thinkwrike</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar