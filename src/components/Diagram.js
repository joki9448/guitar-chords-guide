import React from 'react';

function Diagram({searchedChord}) {
    return (
        <div className="diagram">
            <ins className="scales_chords_api" id="chord-img" chord={searchedChord}></ins>
            <ins className="scales_chords_api" id="chord-play" chord={searchedChord} output="sound"></ins>
        </div>
    )
}

export default Diagram;