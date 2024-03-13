import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Chessboard from "./Chessboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Chessboard />
  </React.StrictMode>
);
