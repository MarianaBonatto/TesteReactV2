import './App.css';
import "antd/dist/antd.css";

import { Layout } from "antd";

import { BrowserRouter as Router } from "react-router-dom";

import Rotas from './router/router.js';
import MenuLayout from './components/layout/menu/menu.js';
import MenuHorizontal from './components/common/menuHorizontal';
import FooterLayout from './components/common/footer';

const { Content, Footer } = Layout;

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
      {/* <select className='selectLanguage' onChange={languageChange}>
        <option></option>
        <option value='pt-BR'>PT</option>
        <option value='en-US'>EN</option>
      </select>
      <MenuLayout /> */}
      {/* <MenuHorizontal />
      <Content style={{ marginTop: "1.25rem" }}>
        <Rotas />
      </Content> */}

      <MenuHorizontal languageChange={languageChange} />
      {/* languageChange={this.languageChange} */}
      <Content style={{ marginTop: "1.25rem" }}>
        <Rotas />
      </Content>
      {/* <Footer> */}
      <FooterLayout />
      {/* </Footer> */}


    </Router>

  );
}

export default App;
