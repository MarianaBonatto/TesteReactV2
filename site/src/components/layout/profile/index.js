import React, { useState } from 'react';
import './index.css';
import { i18n } from '../../../translate/i18n';
import { Input, Card, Space, Comment, Avatar, Modal, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

import ImputSearch from '../../common/inputSearch';
import CardPost from '../../common/cardPost';
import iconUser from '../../../imagens/user.png'

const { Search } = Input;

const PerfilLayout = () => {

    return (
        <div className='content-perfil'>
            {/* <div><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>N</Avatar></div> */}
            <div className='upper-container'>
                <div className='img-perfil'>
                    <img src={iconUser} alt=' ' height='100%' width='100%' className='perfil' />
                </div>
            </div >

            <div className='lower-container'>
                <div>
                    <div><p className='div-name-profile'>Nathaly Oliveira</p></div>
                    <div>
                        <span className='title-profile'>{i18n.t('configPerfil.email')} </span> <span>nathaly@gmail.com</span>
                    </div>
                    <div>
                        <span className='title-profile'>{i18n.t('configPerfil.regiao')} </span><span>Sudeste</span>
                    </div>
                    <div>
                        <span className='title-profile'>{i18n.t('configPerfil.estado')} </span><span>São Paulo</span>
                    </div>

                </div>
            </div>

            <div className='cards-post'>
                <CardPost />
            </div>

        </div>

    );
};

export default PerfilLayout;