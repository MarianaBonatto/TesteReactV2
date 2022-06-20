import React from 'react';
import './index.css';
import logo from './../../../imagens/logo.png'

import { i18n } from '../../../translate/i18n';

import { Card, Space, Comment, Avatar, Imput, Button } from 'antd'
import ImputProfile from '../../common/inputProfile';

const Cadastro = () => {

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
                <ImputProfile HolderImput={i18n.t('configPerfil.nome')} />
                <ImputProfile HolderImput={i18n.t('configPerfil.email')} />
                <ImputProfile HolderImput={i18n.t('configPerfil.cidade')} />
                <ImputProfile HolderImput={i18n.t('configPerfil.senha')} type='*' />
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
                    shape="round">
                    {i18n.t('botoes.cadastrar')}
                </Button>

            </div>
        </Card>
    );
};

export default Cadastro;