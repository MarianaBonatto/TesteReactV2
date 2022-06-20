import React, { useState } from 'react';
import './index.css';

import { Input, Modal, Button } from 'antd'
import { SearchOutlined, RightOutlined } from '@ant-design/icons';

const { Search } = Input;

const ImputProfile = props => {

    const { HolderImput, type } = { ...props };

    const tipoInput = type == '*' ? 'password' : 'text'

    return (
        <div className='content-profile'>
            <input className='input-profile' type={tipoInput} placeholder={HolderImput} />
        </div>
    );
};

export default ImputProfile;