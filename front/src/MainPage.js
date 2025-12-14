import React, { useState, useEffect } from 'react';
import './MainPage.css';

const MainPage = ({ user, onLogout }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="main-page-container">
      <header className="main-header">
        <div className="header-content">
          <h1 className="app-logo">Matcher</h1>
          <div className="header-actions">
            <span className="user-name">{user?.firstName} {user?.lastName}</span>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="welcome-section">
          <h2 className="greeting">{getGreeting()}, {user?.firstName}!</h2>
          <p className="welcome-message">Welcome to Matcher - Your personalized dashboard</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">👤</div>
            <h3>Profile</h3>
            <p>Manage your account settings</p>
            <button className="card-button">View Profile</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🔍</div>
            <h3>Discover</h3>
            <p>Find new matches and connections</p>
            <button className="card-button">Start Exploring</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">💬</div>
            <h3>Messages</h3>
            <p>Chat with your connections</p>
            <button className="card-button">Open Messages</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">⚙️</div>
            <h3>Settings</h3>
            <p>Customize your experience</p>
            <button className="card-button">Manage Settings</button>
          </div>
        </div>

        <div className="info-section">
          <div className="info-card">
            <h3>Account Information</h3>
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{user?.firstName} {user?.lastName}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Member Since:</span>
              <span className="info-value">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </main>

      <footer className="main-footer">
        <p>&copy; 2024 Matcher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
