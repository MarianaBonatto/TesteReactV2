import React, { useState } from 'react';
import './index.css';
import { i18n } from '../../../translate/i18n';
import { Input, Card, Space, Comment, Avatar, Modal, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

import ImputSearch from '../../common/inputSearch';
import CardPost from '../../common/cardPost';

const { Search } = Input;

const Postagens = () => {

    return (
        <div className='content-dicionario-post'>
            <div className='search-content'>
                <div className='span-logo'><span className='lib'>Lib</span><span className='web'>Web</span></div>

                <Input
                    prefix={<SearchOutlined />}
                    placeholder={i18n.t('pesquisa.input')} />


                <div className='botoes'>
                    <Button
                        className='btn'
                        // style={{
                        //     backgroundColor: '#ED6E0C',
                        //     borderColor: '#ED6E0C',
                        //     width: '6rem',
                        // }}
                        type="primary"
                        shape="round">
                        {i18n.t('regioes.norte')}
                    </Button>
                    <Button
                        className='btn'
                        type="primary"
                        shape="round">
                        {i18n.t('regioes.sul')}
                    </Button>
                    <Button
                        className='btn'
                        type="primary"
                        shape="round">
                        {i18n.t('regioes.nordeste')}
                    </Button>
                    <Button
                        className='btn'
                        type="primary"
                        shape="round">
                        {i18n.t('regioes.sudeste')}
                    </Button>
                    <Button
                        className='btn'
                        type="primary"
                        shape="round">
                        {i18n.t('regioes.centroOeste')}
                    </Button>
                </div>

            </div>

            {/* <div >

            </div>
            <div className='post'><CardPost /></div> */}
        </div>

    );
};

export default Postagens;