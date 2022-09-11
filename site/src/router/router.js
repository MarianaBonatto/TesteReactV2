import React from "react";
import { Routes, Route, renderMatches } from "react-router-dom";

import PageSearch from "../components/layout/home/index.js";
import InitialPage from "../components/layout/inicio/index.js";
import MenuLayout from "../components/layout/menu/menu.js";
import Configuracao from "../components/layout/configuracoes";
import NovaPalavraVideo from "../components/layout/novaPalavraVideo";
import Cadastro from "../components/layout/usuario/cadastro";
import Login from "../components/layout/usuario/login";
import Postagens from "../components/layout/postagem";
import Pendentes from "../components/layout/pendentes/index.js";
import PerfilLayout from "../components/layout/profile/index.js";

class Rotas extends React.Component {
  state = {
    TIP_LIBWEBER: "",
    ID_LIBWEBER: 0,
  };

  changeLibweberType = (tipo, id) => {
    if (tipo === 1) {
      this.setState({ TIP_LIBWEBER: "CUR" });
    } else if (tipo === 2) {
      this.setState({ TIP_LIBWEBER: "LIB" });
    } else {
      this.setState({ TIP_LIBWEBER: "" });
    }
    this.setState({ ID_LIBWEBER: id });
  };

  render() {
    return (
      <Routes>
        <Route
          element={
            <InitialPage
              tipLibweber={this.state.TIP_LIBWEBER}
              onChangeLibweber={this.changeLibweberType}
            />
          }
          path="/"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<Configuracao />} path="/config" />
        <Route element={<Postagens />} path="/dicionario" />
        <Route
          element={<NovaPalavraVideo ID_LIBWEBER={this.state.ID_LIBWEBER} />}
          path="/adicionar"
        />
        <Route element={<PageSearch />} path="/pesquisa" />
        <Route element={<MenuLayout />} path="/menu" />
        <Route
          element={<Pendentes tipLibweber={this.state.TIP_LIBWEBER} />}
          path="/pendente"
        />
        <Route element={<PerfilLayout />} path="/perfil" />
      </Routes>
    );
  }
}

export default Rotas;
