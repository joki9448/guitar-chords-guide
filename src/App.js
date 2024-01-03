import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import {useState} from 'react';

function App() {
  const [chord, setChord] = useState('');
  const [chordSubmit, setChordSubmit] = useState('');
  console.log('chord', chord);
  console.log('chordSubmit', chordSubmit);

  const handleSubmit = () => {
      return (
          setChordSubmit(chord)
      );
  };

  return (
    <div className="App">
      <Header/>
      <SearchBar 
        chord={chord} 
        setChord={setChord} 
        chordSubmit={chordSubmit} 
        setChordSubmit={setChordSubmit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

