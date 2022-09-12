import React, { useState } from "react";
import "./index.css";

import { Link } from "react-router-dom";
import { i18n } from "../../../translate/i18n";

import { createBrowserHistory } from "history"

import { postUsuario, getUsuario } from "../../../services/usuario";

import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";

import logo from "../../../imagens/libra-laranja.png";
import imgRegister from "../../../imagens/img-register.png";
import imgLogin from "../../../imagens/img-login.png";
import iconLocal from "../../../imagens/icon-local.png";

const InitialPage = (props) => {

  const [form] = Form.useForm();
  const [formReg] = Form.useForm();
  var logado = false;

  const onFinishRegister = (values) => {
    const usuario = {
      email: values.email,
      estadoNome: values.uf,
      // idLibweber: 0,
      idTipo: 2,
      nome: values.name,
      senha: values.password,
    };

    postUsuario(usuario)
      .then((response) => {
        message.success(i18n.t("validacao.sucessoCadastro"));
        window.location.href = '#login';
      })
      .catch((error) => {
        message.error(i18n.t("validacao.erroCadastro"))
      });

    formReg.resetFields();

  };

  async function onFinishLogin(values) {
    const email = values.email;
    const senha = values.password;
    let libweber = (await getUsuario(email, senha)).data;

    if (libweber) {
      message.success(i18n.t("validacao.sucessoLogin"));
      props.onChangeLibweber(libweber.idTipo, libweber.idLibweber);
      logado = true;
    } else {
      form.resetFields();
      message.error(i18n.t("validacao.erroLogin"));
      logado = false;
    }
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
        <div className="img-logo-inicio">
          <img className="imagem-logo-inicio-respons" src={logo} />
        </div>
        <div className="content-right">
          {" "}
          <div className="div-lib-web">
            <span className="lw1-intro">Lib</span>
            <span className="lw2-intro">Web</span>
          </div>
          <p className="intro-txt">{i18n.t("textos.introducao")}</p>
          <Button
            className="bnt first-button"
            style={{
              background: "#1EA672",
              borderColor: "#1EA672",
              width: "6rem",
            }}
            type="primary"
            shape="round"
            onClick={() => window.location.href = '#login'}
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
            onClick={() => window.location.href = '#register'}
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

      <div className="login" id="login">
        <div className="form-login">
          <h1> {i18n.t("botoes.entrar")}</h1>
          <Form
            form={form}
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
                className="input-style"
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
                className="input-style"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder={i18n.t("configPerfil.senha")}
                type="password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button bnt"
                style={{
                  background: "#1EA672",
                  borderColor: "#1EA672",
                  width: "6rem",
                }}
                type="primary"
                shape="round"
              >
                <Link to={logado ? "/dicionario" : "/"}>{i18n.t("botoes.entrar")}</Link>
                {/* {i18n.t("botoes.entrar")} */}
              </Button>
              <Button
                // className="bnt"
                className="bnt"
                style={{
                  backgroundColor: "#ED6E0C",
                  borderColor: "#ED6E0C",
                  width: "6rem",
                }}
                type="primary"
                shape="round"
                onClick={() => window.location.href = '#register'}
              >
                {i18n.t("botoes.cadastrar")}
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <div>
            <img style={{ width: "70%" }} src={imgLogin} className='imagem-ocultar' />
          </div>
        </div>
      </div>
      <div className="register" id="register">
        <div>
          <img style={{ width: "60%" }} src={imgRegister} className='imagem-ocultar' />
        </div>
        <div className="form-cadastro">
          <h1> {i18n.t("botoes.cadastrar")}</h1>
          <Form
            form={formReg}
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
                className="input-style"
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
              <Input
                className="input-style"
                prefix={<LoginOutlined />} placeholder="Email" />
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
                className="input-style"
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
                className="input-style"
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
                  message: i18n.t("validacao.confirmPassword"),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(i18n.t("validacao.passwordsNoMatch"))
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                className="input-style"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder={i18n.t("configPerfil.confirmarSenha")}
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="bnt"
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
