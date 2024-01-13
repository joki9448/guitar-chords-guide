import React from 'react';
import { useState } from 'react';
import { TbGuitarPick, TbGuitarPickFilled } from "react-icons/tb";

function SearchBar({ chord, setChord, handleSubmit }) {
  const [isHovered, setIsHovered] = useState(false);

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
      <button 
        className="search-btn" 
        type="submit" 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {isHovered ? <TbGuitarPickFilled size="3em" /> : <TbGuitarPick size="3em"/>}
      </button>
    </form>
  );
}

export default SearchBar;
