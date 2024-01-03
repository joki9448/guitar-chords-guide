import React from 'react';
import {useState} from 'react';

function SearchBar() {
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setChord(e.target.value)}
                value={chord}
                placeholder="Enter Chord"
            >
            </input>
            <button
                className="search-btn"
                type="button"
                onClick={(e) => setChordSubmit(chord)}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;