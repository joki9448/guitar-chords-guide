import React from 'react';

function Diagram({searchedChord}) {
    return (
        <div className="diagram">
            <ins className="scales_chords_api" chord={searchedChord}></ins>
            {/* <ins className="scales_chords_api" chord={searchedChord} output="sound"></ins> */}
        </div>
    )
}

export default Diagram;