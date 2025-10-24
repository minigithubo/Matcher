import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login');

  const switchToSignUp = () => {
    setCurrentView('signup');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  return (
    <div className="App">
      {currentView === 'login' ? (
        <Login onSwitchToSignUp={switchToSignUp} />
      ) : (
        <SignUp onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default App;
