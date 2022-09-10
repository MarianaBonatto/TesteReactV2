import React from "react";
import "./index.css";
import logo from "./../../../imagens/logo.png";
import { getUsuario } from "../../../services/usuario";
import { i18n } from "../../../translate/i18n";

import { Card, Space, Comment, Avatar, Imput, Button } from "antd";
import ImputProfile from "../../common/inputProfile";
import { Link } from "react-router-dom";

let opcaoInput = "";
class Login extends React.Component {
  state = {
    email: "",
    senha: "",
  };

  inputChange = (value, tipo) => {
    if (tipo == "email") {
      this.setState({
        email: value,
      });
    }
    if (tipo == "senha") {
      this.setState({
        senha: value,
      });
    }
  };

  buscaUsuario = () => {
    const usuario = {
      email: this.state.email,
      senha: this.state.senha,
    };
    console.log(getUsuario(3));
  };

  render() {
    return (
      <Card
        className="card"
        hoverable
        style={{
          width: "35%",
          borderRadius: 15,
          // boxShadow: '2px 3px 2px 1px #cacaca'
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div className="avatar">
          <img style={{ width: "40%", height: "auto" }} src={logo} alt="Nath" />
        </div>
        <div>
          <ImputProfile
            HolderImput={i18n.t("configPerfil.email")}
            inputChange={this.inputChange}
            Opcao="email"
          />
          <ImputProfile
            HolderImput={i18n.t("configPerfil.senha")}
            inputChange={this.inputChange}
            Opcao="*"
          />
        </div>
        <div className="bnts">
          <Button
            className="bnt"
            style={{
              color: "#ED6E0C",
              borderColor: "#ED6E0C",
              width: "35%",
            }}
            // type="primary"
            shape="round"
          >
            <Link to="cadastro">{i18n.t("botoes.cadastrar")}</Link>
          </Button>

          <Button
            className="bnt"
            style={{
              background: "#ED6E0C",
              borderColor: "#ED6E0C",
              width: "35%",
            }}
            type="primary"
            shape="round"
            onClick={this.buscaUsuario}
          >
            {i18n.t("botoes.entrar")}
          </Button>
        </div>
      </Card>
    );
  }
}

export default Login;
