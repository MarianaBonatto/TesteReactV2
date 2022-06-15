import React from 'react';
import './index.css';

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
                <ImputProfile HolderImput='Nome:' />
                <ImputProfile HolderImput='Email:' />
                <ImputProfile HolderImput='Cidade:' />
                <ImputProfile HolderImput='Senha:' />
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
                    Cancelar
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
                    Salvar
                </Button>
            </div>
        </Card>
    );
};

export default Configuracao;