import './Chessboard.css'

const Chessboard = () => {
    return (
        <div className="chessboard">
            {renderCells()}
        </div>
    );
};

const renderCells = () => {
    const cells = [];
    const numRows = 8;
    const numCols = 8;
    const cellColorMap = ["white", "black"]; // Alternate colors for cells

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const cellColor = cellColorMap[(row + col) % 2];
            cells.push(<div key={`${row}-${col}`} className={`cell ${cellColor}`}></div>);
        }
    }

    return cells;
};

export default Chessboard;
