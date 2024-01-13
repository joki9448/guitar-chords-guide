import React from 'react';

function Diagram({searchedChord}) {
    return (
        <div className="diagram">
            <ins className="scales_chords_api" chord={searchedChord}></ins>
        </div>
    )
}

export default Diagram;