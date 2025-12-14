import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import MainPage from './MainPage';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);

  const switchToSignUp = () => {
    setCurrentView('signup');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCurrentView('main');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  return (
    <div className="App">
      {currentView === 'login' ? (
        <Login
          onSwitchToSignUp={switchToSignUp}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : currentView === 'signup' ? (
        <SignUp
          onSwitchToLogin={switchToLogin}
          onSignupSuccess={handleLoginSuccess}
        />
      ) : (
        <MainPage
          user={user}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
