import React from 'react';
import './index.css';
import logo from './../../../imagens/logo.png'
import { postUsuario } from '../../../services/usuario';
import { i18n } from '../../../translate/i18n';

import { Card, Space, Comment, Avatar, Imput, Button } from 'antd'
import ImputProfile from '../../common/inputProfile';

let opcaoInput = '';
class Cadastro extends React.Component {

    state = {
        email: '',
        senha: '',
        nome: '',
        usuario: {
            email: '',
            idCidade: '1',
            idLibweber: '0',
            idTipo: '0',
            nome: '',
            senha: ''
        }
    };

    inputChange = (value, tipo) => {
        if (tipo == 'nome') {
            this.setState({
                nome: value
            })
        }

        if (tipo == 'email') {
            this.setState({
                email: value
            })
        }
        if (tipo == '*') {
            this.setState({
                senha: value
            })
        }
    }

    novoUsuario = () => {
        const usuario = {
            email: this.state.email,
            idCidade: 1,
            idLibweber: 0,
            idTipo: 1,
            nome: this.state.nome,
            senha: this.state.senha
        }
        postUsuario(usuario);
    }

    render() {
        return (
            <Card className='card'
                hoverable
                style={{
                    width: '35%',
                    borderRadius: 15,
                    // boxShadow: '2px 3px 2px 1px #cacaca'
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}>
                <div className='avatar'><img style={{ width: '40%', height: 'auto' }} src={logo} alt="Nath" /></div>
                <div>
                    <ImputProfile HolderImput={i18n.t('configPerfil.nome')} inputChange={this.inputChange} Opcao='nome' />
                    <ImputProfile HolderImput={i18n.t('configPerfil.email')} inputChange={this.inputChange} Opcao='email' />
                    <ImputProfile HolderImput={i18n.t('configPerfil.cidade')} inputChange={this.inputChange} Opcao='cidade' />
                    <ImputProfile HolderImput={i18n.t('configPerfil.senha')} inputChange={this.inputChange} Opcao='*' />
                    <ImputProfile HolderImput={i18n.t('configPerfil.confirmarSenha')} inputChange={this.inputChange} Opcao='*' />
                </div>
                <div className='bnts'>
                    <Button
                        className='bnt'
                        style={{
                            background: '#ED6E0C',
                            borderColor: '#ED6E0C',
                            width: '35%'
                        }}
                        type="primary"
                        shape="round"
                        onClick={this.novoUsuario}>
                        {i18n.t('botoes.cadastrar')}
                    </Button>

                </div>
            </Card >
        );
    }

};

export default Cadastro;