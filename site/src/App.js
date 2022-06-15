import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router } from "react-router-dom";

import Rotas from './router/router.js';
import MenuLayout from './components/layout/menu/menu.js';

import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Router>
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
