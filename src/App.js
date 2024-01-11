import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Diagram from './components/Diagram';

function App() {
  const initialChordSubmit = localStorage.getItem('chordSubmit') || '';
  console.log('initialChordSubmit', initialChordSubmit)
  const [chord, setChord] = useState('');
  const [chordSubmit, setChordSubmit] = useState('');

  const handleSubmit = () => {
    setChordSubmit(chord);
    localStorage.setItem('chordSubmit', chord);
    console.log('chord submitted', chord)
  };

  return (
    <div className="App">
      <h1>Chord App</h1>
      <SearchBar
        chord={chord}
        setChord={setChord}
        handleSubmit={handleSubmit}
      />
      <h2 className="chord-header">{chordSubmit}</h2>
      <Diagram searchedChord={initialChordSubmit} />
    </div>
  );
}

export default App;
