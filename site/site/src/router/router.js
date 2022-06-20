import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import PageSearch from "../components/layout/home/index.js";
import MenuLayout from "../components/layout/menu/menu.js";
import Configuracao from "../components/layout/configuracoes";
import NovaPalavraVideo from "../components/layout/novaPalavraVideo";
import Cadastro from "../components/layout/usuario/cadastro";
import Login from "../components/layout/usuario/login";
import Postagens from "../components/layout/postagem";

const Rotas = () => {
    return (
        <Routes>
            <Route element={<Login />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Cadastro />} path="/cadastro" />
            <Route element={<Configuracao />} path="/config" />
            <Route element={<Postagens />} path="/dicionario" />
            <Route element={<NovaPalavraVideo />} path="/adicionar" />
            <Route path="/pesquisa" element={<PageSearch />} />
            <Route path="/menu" element={<MenuLayout />} />
        </Routes>
    )
}

export default Rotas;