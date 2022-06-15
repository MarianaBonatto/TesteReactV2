import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var express = require('express');
// var app = express();
// var path = require('path');

// app.use(express.static(__dirname));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
