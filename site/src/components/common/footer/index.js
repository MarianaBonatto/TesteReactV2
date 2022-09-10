import React, { useState } from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';

import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';

import logo from '../../../imagens/libra-laranja.png';

const FooterLayout = () => {

    return (
        <div className='content'>
            <div className='footer'>

                <div className='topic'>
                    <h1>Sobre Nós</h1>
                    <p>Somos uma equipe unida no Instituto Federal para realizar o Trabalho de Conclusão de Curso!</p>
                </div>
                <div className='topic'>
                    <h1>Contato</h1>
                    <p>libweb2021@gmail.com</p>
                </div>
                <div className='topic'>
                    <h1>Aplicação</h1>
                    <p>Documentação da API</p>
                </div>
                {/* <div className='topic'> <img src={logo} /></div> */}
            </div>

        </div >
    );
};

export default FooterLayout;