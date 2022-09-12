import './App.css';
import 'antd/dist/antd.min.css';

import { Layout } from "antd";

import { BrowserRouter as Router } from "react-router-dom";

import Rotas from './router/router.js';
import MenuHorizontal from './components/common/menuHorizontal';
import FooterLayout from './components/common/footer';

const { Content } = Layout;

const I18N_STORAGE_KEY = 'i18nextLng';

const languageChange = (event) => {
  localStorage.setItem(
    I18N_STORAGE_KEY,
    event
  )
  window.location = window.location
}

function App() {

  return (
    <Router>
      <MenuHorizontal languageChange={languageChange} />
      <Content style={{ marginTop: "1.25rem" }}>
        <Rotas />
      </Content>
      <FooterLayout />
    </Router>
  );
}

export default App;
