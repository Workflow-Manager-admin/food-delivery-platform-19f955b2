import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

// PUBLIC_INTERFACE
function Header({ onToggleTheme, theme }) {
  /** App-wide header navigation bar with theme and user/profile actions. */
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar" aria-label="Main site navigation">
      <NavLink to="/" className="brand">QuickBite</NavLink>
      <NavLink to="/" className="nav-link">
        Restaurants
      </NavLink>
      {user &&
        <>
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </>
      }
      {!user &&
        <>
          <NavLink to="/login" className="nav-link">Login</NavLink>
          <NavLink to="/register" className="nav-link">Sign up</NavLink>
        </>
      }
      {user &&
        <button className="btn outline" onClick={handleLogout} style={{marginLeft: 12}}>Logout</button>
      }
      <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}
export default Header;
