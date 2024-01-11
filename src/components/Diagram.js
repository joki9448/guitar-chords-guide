import React from 'react';

function Diagram({searchedChord}) {
    console.log('searchedChord', searchedChord);

    return (
        <div>
            <ins className="scales_chords_api" chord={searchedChord}></ins>
            <ins className="scales_chords_api" chord={searchedChord} output="sound"></ins>
        </div>
    )
}

export default Diagram;