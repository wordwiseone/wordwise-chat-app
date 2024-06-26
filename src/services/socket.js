import io from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

let socket;

export const initSocket = () => {
  socket = io(SOCKET_URL);
};

export const joinChat = (chatId) => {
  if (socket) socket.emit('join chat', chatId);
};

export const leaveChat = (chatId) => {
  if (socket) socket.emit('leave chat', chatId);
};

export const sendMessage = (chatId, message, sender) => {
  if (socket) socket.emit('new message', { chatId, message, sender });
};

export const onNewMessage = (callback) => {
  if (socket) socket.on('message', callback);
};

export default socket;