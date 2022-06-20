import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router } from "react-router-dom";

import Rotas from './router/router.js';
import MenuLayout from './components/layout/menu/menu.js';

const I18N_STORAGE_KEY = 'i18nextLng';

const languageChange = (event) => {
  localStorage.setItem(
    I18N_STORAGE_KEY,
    event.target.value
  )
  window.location = window.location
}

function App() {
  return (
    <Router>
      <select className='selectLanguage' onChange={languageChange}>
        <option></option>
        <option value='pt-BR'>PT</option>
        <option value='en-US'>EN</option>
      </select>
      <MenuLayout />
      <Rotas />
      {/* <Layout>
        <Sider>
          <MenuLayout />
        </Sider>
        <Content>
          <Rotas />
        </Content>
      </Layout> */}
    </Router>

  );
}

export default App;
