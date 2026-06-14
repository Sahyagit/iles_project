import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const getDashboardPath = (role) => {
  switch (role) {
    case 'work_supervisor':
    case 'university_supervisor': return '/supervisor/dashboard';
    case 'student': return '/student/dashboard';
    case 'admin': return '/admin/dashboard';
    default: return '/';
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const res = await api.post('/token/', { username, password });
    const { access, refresh } = res.data;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);

    const profileRes = await api.get('/users/me/');
    const userData = profileRes.data;
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const register = async (formData) => {
    const res = await api.post('/users/register/', formData);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    setUser(null);
  };

  // Refresh access token using refresh token
  const refreshToken = async () => {
    const refresh = localStorage.getItem('refresh_token');
    if (!refresh) { logout(); return null; }
    try {
      const res = await api.post('/token/refresh/', { refresh });
      localStorage.setItem('access_token', res.data.access);
      return res.data.access;
    } catch {
      logout();
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, getDashboardPath, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};
