import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayListCard from './components/PlayListCard';
import {
  addRecommendation,
  getRecomendations,
} from './services/firebase/recommendations';
import Playlist from './models/Playlist';
import User from './models/User';

const playListMock = {
  id: 1,
  name: 'Mi Lista',
  userName: 'Freud',
  url: 'www.google.com',
  songs: [1, 2, 3],
};

const toggleLike = () => {
  console.log('Test toggleLike');
};

const App: React.FC = () => {
  useEffect(() => {
    getRecomendations().then((r) => console.log(r));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PlayListCard playList={playListMock} toggleLike={toggleLike} />
      </header>
    </div>
  );
};

export default App;
