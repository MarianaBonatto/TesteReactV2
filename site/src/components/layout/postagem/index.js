import React, { useState } from 'react';
import './index.css';

import { Input, Card, Space, Comment, Avatar, Modal, Button } from 'antd'
import { SearchOutlined, RightOutlined } from '@ant-design/icons';

import ImputSearch from '../../common/inputSearch';
import CardPost from '../../common/cardPost';
import logo from '../../../imagens/logoBranca.png';
import regioes from '../../../imagens/regioes.jpg';

const { Search } = Input;

const Postagens = () => {

    return (
        <div >
            <div><ImputSearch /></div>
            <div className='post'><CardPost /></div>
        </div>
    );
};

export default Postagens;