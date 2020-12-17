import React from 'react';
import './App.css';
import PlayListCard from './components/PlayListCard';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
