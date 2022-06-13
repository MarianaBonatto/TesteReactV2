import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router } from "react-router-dom";

import Rotas from './router/router.js';
import MenuLayout from './components/layout/menu/menu.js';

function App() {
  return (
    <Router>
      <MenuLayout />
      <Rotas />
    </Router>

  );
}

export default App;
