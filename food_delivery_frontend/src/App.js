import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import MenuPage from './pages/MenuPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import OrderPage from './pages/OrderPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import PaymentPage from './pages/PaymentPage';
import ReviewPage from './pages/ReviewPage';

import { AuthProvider, useAuth } from './contexts/AuthContext';

// PUBLIC_INTERFACE
function PrivateRoute({ children }) {
  /** Wrapper for protected routes requiring authentication. */
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

// PUBLIC_INTERFACE
function App() {
  /** Root component for the Food Delivery frontend app.
   *  Hosts routing, navigation, and global styling/theme.
   */
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header onToggleTheme={handleThemeToggle} theme={theme} />
          <main className="content-container">
            <Routes>
              <Route path="/" element={<RestaurantList />} />
              <Route path="/restaurants/:id" element={<RestaurantDetail />} />
              <Route path="/restaurants/:id/menu" element={<MenuPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
              <Route path="/orders/:orderId" element={<PrivateRoute><OrderPage /></PrivateRoute>} />
              <Route path="/orders/:orderId/track" element={<PrivateRoute><OrderTrackingPage /></PrivateRoute>} />
              <Route path="/orders/:orderId/pay" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
              <Route path="/restaurants/:id/review" element={<PrivateRoute><ReviewPage /></PrivateRoute>} />
              <Route path="*" element={<div style={{padding:24}}>404 Not Found</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
