import React from 'react';

function SearchBar({ chord, setChord, searchedChord, handleSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    window.location.reload(); 
  }
  return (
    <form className="search-bar" onSubmit={handleFormSubmit}> 
      <input
        className="input"
        type="text"
        onChange={(e) => setChord(e.target.value)}
        value={chord}
        placeholder="Enter Chord"
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
