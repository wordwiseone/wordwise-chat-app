import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (username, password) => api.post('/auth/login', { username, password });
export const register = (username, password) => api.post('/auth/register', { username, password });
export const getChats = () => api.get('/chat');
export const createChat = (participantUsername) => api.post('/chat', { participantUsername });
export const getMessages = (chatId) => api.get(`/chat/${chatId}/messages`);

export default api;