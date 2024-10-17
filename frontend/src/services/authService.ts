import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust this URL based on your backend

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const logout = async (): Promise<void> => {
  // Perform any necessary cleanup on logout, e.g., remove token from local storage
  localStorage.removeItem('token');
  return Promise.resolve();
};
