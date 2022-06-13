import React, { useState } from 'react';
import './index.css';

import { Input, Modal, Button } from 'antd'
import { SearchOutlined, RightOutlined } from '@ant-design/icons';

const { Search } = Input;

const ImputProfile = props => {

    const { HolderImput } = { ...props };

    return (
        <div className='content-profile'>
            <input className='input-profile' type='text' placeholder={HolderImput} />
        </div>
    );
};

export default ImputProfile;