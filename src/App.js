import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Diagram from './components/Diagram';
import Fretboard from './components/Fretboard';
import { LiaGuitarSolid } from "react-icons/lia";

function App() {
  const initialChordSubmit = localStorage.getItem('chord') || '';
  const [chord, setChord] = useState('');

  const handleSubmit = () => {
      localStorage.setItem('chord', chord);
  };

  return (
    <div className="App">
      <h1 className="header"><span>Chord</span><span>Guru</span></h1>
      <SearchBar
        chord={chord}
        setChord={setChord}
        searchedChord={initialChordSubmit}
        handleSubmit={handleSubmit}
      />
      <div className="guitar-icon"><LiaGuitarSolid size='6em'/></div>
      {initialChordSubmit === '' ? null : <ins className="scales_chords_api" chord={initialChordSubmit} output="sound"></ins>}
      {initialChordSubmit === '' ? null : <Diagram searchedChord={initialChordSubmit} />}
      <Fretboard/>
    </div>
  );
}

export default App;
