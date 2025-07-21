import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.rende(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//If you want to measure performance in your app, pass a function
// to log results (example: reportWebVitals(console.log))
// or send to aan analytics endpoint  