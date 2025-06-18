import React from 'react';
import './App.css';
import ChatBot from './components/chatbot';

function App() {
  return (
    <div className="App">
      <div className="section">
        <h1>Abhik's Portfolio</h1>
      </div>

      <div className="section">
        <h2>Ask Me Anything</h2>
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
