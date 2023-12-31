import './App.css';
import SearchBar from './SearchBar';
import {useState} from 'react';

function App() {
  const [chord, setChord] = useState('');
  const [chordSubmit, setChordSubmit] = useState('');
  // console.log('chord', chord);
  // console.log('chordSubmit', chordSubmit);

  const handleSubmit = () => {
      return (
          setChordSubmit(chord)
      );
  };

  return (
    <div className="App">
      <h1>Chord App</h1>
      <SearchBar 
        chord={chord} 
        setChord={setChord} 
        setChordSubmit={setChordSubmit}
        handleSubmit={handleSubmit}
      />
      <h1 className="chord-header">{chordSubmit}</h1>
    </div>
  );
}

export default App;

