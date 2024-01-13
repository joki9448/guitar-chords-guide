function Fretboard() {
    const fretTotal = 6;
    const frets = [];

    for (let i = 1; i <= fretTotal; i++) {
        frets.push(<div className={`fret-${i}`}></div>);
    }
    return (
        <div className="fretboard">
            {frets}
        </div>
    )
}

export default Fretboard;