import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import Chessboard from "./Chessboard";
// Define the MultiplicationTable component
function MultiplicationTable() {
    // Define the size of the multiplication table (e.g., 10x10)
    const size = 10;

    // Create an array to represent the rows of the multiplication table
    const rows = [];

    // Loop through each row of the multiplication table
    for (let i = 1; i <= size; i++) {
        // Create an array to represent the cells of the current row
        const cells = [];

        // Loop through each column of the current row
        for (let j = 1; j <= size; j++) {
            // Calculate the product of the current row and column
            const product = i * j;

            // Create a cell element containing the product
            const cell = <td key={j}>{product}</td>;

            // Add the cell to the array of cells for the current row
            cells.push(cell);
        }

        // Create a row element containing the cells for the current row
        const row = <tr key={i}>{cells}</tr>;

        // Add the row to the array of rows
        rows.push(row);
    }

    // Render the multiplication table
    return (
        <table className="multiplication-table">
            <tbody>
            {rows}
            </tbody>
        </table>
    );
}

// Render the MultiplicationTable component
const root2 =ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <React.StrictMode>
        <MultiplicationTable />
    </React.StrictMode>
);