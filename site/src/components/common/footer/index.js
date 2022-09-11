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
                    <h1>{i18n.t('textos.sobreNos')}</h1>
                    <p>{i18n.t('textos.textoSobre')}</p>
                </div>
                <div className='topic'>
                    <h1>{i18n.t('textos.contato')}</h1>
                    <p> <a href='mailto:libweb2021@gmail.com'>libweb2021@gmail.com</a>
                    </p>
                </div>
                <div className='topic'>
                    <h1>{i18n.t('textos.aplicacao')}</h1>
                    <p>Documentação da API</p>
                </div>
                {/* <div className='topic'> <img src={logo} /></div> */}
            </div>

        </div >
    );
};

export default FooterLayout;