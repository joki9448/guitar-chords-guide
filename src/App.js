import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Diagram from './components/Diagram';

function App() {
  const initialChordSubmit = localStorage.getItem('chordSubmit') || '';
  const [chord, setChord] = useState('');

  const handleSubmit = () => {
      localStorage.setItem('chordSubmit', chord);
  };

  return (
    <div className="App">
      <h1 className="header">Chord App</h1>
      <SearchBar
        chord={chord}
        setChord={setChord}
        searchedChord={initialChordSubmit}
        handleSubmit={handleSubmit}
      />
      {initialChordSubmit === '' ? null : <ins className="scales_chords_api" chord={initialChordSubmit} output="sound"></ins>}
      {initialChordSubmit === '' ? null : <Diagram searchedChord={initialChordSubmit} />}
    </div>
  );
}

export default App;
