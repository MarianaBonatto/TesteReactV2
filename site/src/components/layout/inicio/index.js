import React, { useState } from "react";
import "./index.css";

import { Link } from "react-router-dom";
import { i18n } from "../../../translate/i18n";

import { postUsuario, getUsuario } from "../../../services/usuario";

import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";

import logo from "../../../imagens/libra-laranja.png";
import imgRegister from "../../../imagens/img-register.png";
import imgLogin from "../../../imagens/img-login.png";
import iconLocal from "../../../imagens/icon-local.png";

const InitialPage = (props) => {
  const onFinishRegister = (values) => {
    // console.log('Received values of form: ', values);
    const usuario = {
      email: values.email,
      idLibweber: 0,
      idTipo: 2,
      nome: values.name,
      senha: values.password,
    };
    postUsuario(usuario);
  };

  async function onFinishLogin(values) {
    const email = values.email;
    const senha = values.password;
    let libweber = (await getUsuario(email, senha)).data;

    if (libweber) {
      console.log("LOGADO");
      props.onChangeLibweber(libweber.idTipo);
    } else {
      console.log("NÃO LOGADO");
    }
    console.log(props.tipLibweber);
  }

  const validatePassword = (rule, value, callback) => {
    var numeros = "([0-9])";
    var alfabetoa = "([a-z])";
    var alfabetoA = "([A-Z])";
    var chEspeciais = "([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])";

    if (!value.match(numeros)) {
      callback(i18n.t("validacao.oneNumber"));
    }
    if (!value.match(alfabetoa)) {
      callback(i18n.t("validacao.oneLower"));
    }
    if (!value.match(alfabetoA)) {
      callback(i18n.t("validacao.oneUpper"));
    }
    if (!value.match(chEspeciais)) {
      callback(i18n.t("validacao.oneSpecial"));
    }
    if (value.length < 8) {
      callback(i18n.t("validacao.eightCaracter"));
    } else {
      callback();
    }
  };

  return (
    <div className="content">
      <div className="intro">
        <div>
          <img src={logo} />
        </div>
        <div className="content-right">
          {" "}
          <span className="lw1-intro">Lib</span>
          <span className="lw2-intro">Web</span>
          <p className="intro-txt">
            No Brasil, a comunidade surda se diverge muito da ouvinte,
            principalmente pela linguagem utilizada, a Lingua Brasileira de
            Sinais, usada para transmitir ideias, sentimentos e vivências.
          </p>
          <Button
            className="bnt"
            style={{
              background: "#1EA672",
              borderColor: "#1EA672",
              width: "6rem",
            }}
            type="primary"
            shape="round"
          >
            {i18n.t("botoes.entrar")}
          </Button>
          <Button
            className="bnt"
            style={{
              color: "#1EA672",
              borderColor: "#1EA672",
              width: "6rem",
            }}
            shape="round"
          >
            {i18n.t("botoes.cadastrar")}
          </Button>
          <Button
            className="bnt"
            style={{
              color: "#F27B13",
              borderColor: "#F27B13",
            }}
            shape="round"
          >
            <Link to="/dicionario">{i18n.t("menu.dicionario")}</Link>
          </Button>
        </div>
      </div>

      <div className="login">
        <div className="form-login">
          <h1> {i18n.t("botoes.entrar")}</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinishLogin}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: i18n.t("validacao.emailInvalido"),
                },
                {
                  required: true,
                  message: i18n.t("validacao.inputEmail"),
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: i18n.t("validacao.inputPassword"),
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder={i18n.t("configPerfil.senha")}
                type="password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button"
                style={{
                  background: "#1EA672",
                  borderColor: "#1EA672",
                  width: "6rem",
                }}
                type="primary"
                shape="round"
              >
                {i18n.t("botoes.entrar")}
              </Button>
              <Button
                className="bnt"
                style={{
                  backgroundColor: "#ED6E0C",
                  borderColor: "#ED6E0C",
                  width: "6rem",
                }}
                type="primary"
                shape="round"
              >
                <Link to="cadastro">{i18n.t("botoes.cadastrar")}</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <div>
            <img style={{ width: "70%" }} src={imgLogin} />
          </div>
        </div>
      </div>
      <div className="register">
        <div>
          <img style={{ width: "60%" }} src={imgRegister} />
        </div>
        <div className="form-cadastro">
          <h1> {i18n.t("botoes.cadastrar")}</h1>
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinishRegister}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: i18n.t("validacao.inputName"),
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={i18n.t("configPerfil.nome")}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: i18n.t("validacao.emailInvalido"),
                },
                {
                  required: true,
                  message: i18n.t("validacao.inputEmail"),
                },
              ]}
            >
              <Input prefix={<LoginOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="uf"
              rules={[
                {
                  required: true,
                  message: i18n.t("validacao.inputState"),
                },
              ]}
            >
              <Input
                prefix={<img src={iconLocal} style={{ width: "15px" }} />}
                placeholder={i18n.t("configPerfil.estado")}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: i18n.t("validacao.inputPassword"),
                },
                {
                  validator: validatePassword,
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder={i18n.t("configPerfil.senha")}
                type="password"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder={i18n.t("configPerfil.confirmarSenha")}
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="bnt"
                // style={{
                //     backgroundColor: '#ED6E0C',
                //     borderColor: '#ED6E0C',
                //     width: '6rem',
                // }}
                type="primary"
                shape="round"
              >
                {i18n.t("botoes.cadastrar")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
