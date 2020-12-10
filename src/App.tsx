import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayListCard from "./components/PlayListCard";

const App: React.FC = () => {
  return(
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <PlayListCard text='Freud' />
    </header>
    
  </div>
  )
};

export default App;
