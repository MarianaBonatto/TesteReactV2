import React, { useState } from 'react';
import './index.css';

import { Input, Modal, Button } from 'antd'
import { SearchOutlined, RightOutlined } from '@ant-design/icons';

const { Search } = Input;

const ImputProfile = props => {

    const { HolderImput, inputChange, Opcao } = { ...props };

    const tipoInput = Opcao == '*' ? 'password' : 'text'

    return (
        <div className='content-profile'>
            <input className='input-profile' type={tipoInput} placeholder={HolderImput}
                onChange={(event) => inputChange(event.target.value, Opcao)} />
        </div>
    );
};

export default ImputProfile;