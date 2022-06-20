import React from 'react';
import './index.css';

import { i18n } from '../../../translate/i18n';

import { Card, Space, Comment, Avatar, Imput, Button } from 'antd'
import ImputProfile from '../../common/inputProfile';

const Configuracao = () => {

    return (
        <Card className='card'
            hoverable
            style={{
                borderRadius: 15,
                width: '35%'
            }}>
            <div className='avatar'><Avatar style={{ width: '30%', height: 'auto' }} src="https://avatars.githubusercontent.com/u/73591609?v=4" alt="Nath" /></div>
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
                    {i18n.t('botoes.cancelar')}
                </Button>

                <Button
                    className='bnt'
                    style={{
                        background: '#ED6E0C',
                        borderColor: '#ED6E0C',
                        width: '35%'
                    }}
                    type="primary"
                    shape="round">
                    {i18n.t('botoes.salvar')}
                </Button>
            </div>
        </Card>
    );
};

export default Configuracao;