import React, { createContext, useContext, useState, useEffect } from 'react';

// PUBLIC_INTERFACE
const AuthContext = createContext();

// PUBLIC_INTERFACE
export function useAuth() {
  /** Custom hook for accessing auth context. */
  return useContext(AuthContext);
}

// PUBLIC_INTERFACE
export function AuthProvider({children}) {
  /** Provides current user session, login/logout/register methods. */
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Try to load session from localStorage
    const stored = localStorage.getItem('auth_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem('auth_user', JSON.stringify(userObj));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };
  // Stub: register just logs in after 'register'
  const register = (userObj) => {
    setUser(userObj);
    localStorage.setItem('auth_user', JSON.stringify(userObj));
  };

  // In real app, also keep JWT, run refresh/auth checks.
  return (
    <AuthContext.Provider value={{user, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
}
