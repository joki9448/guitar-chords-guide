import React from 'react';

function SearchBar({ chord, setChord, handleSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    window.location.reload();
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
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
