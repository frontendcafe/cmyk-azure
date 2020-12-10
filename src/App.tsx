import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayListCard from "./components/PlayListCard";

const playListMock = {
  id: 1,
  name: 'Mi Lista',
  userName: 'Freud',
  url: 'www.google.com',
  songs: [1,2,3],
}

const toggleLike = () => {
  console.log('Test toggleLike')
}

const App: React.FC = () => {
  return(
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <PlayListCard playList={playListMock} toggleLike={toggleLike} />
    </header>
    
  </div>
  )
};

export default App;
