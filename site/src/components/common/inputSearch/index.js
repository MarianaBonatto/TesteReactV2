import React, { useState } from 'react';
import './index.css';

import { Input, Modal, Button } from 'antd'
import { SearchOutlined, RightOutlined } from '@ant-design/icons';

import logo from '../../../imagens/logoBranca.png';
import regioes from '../../../imagens/regioes.jpg';

const { Search } = Input;

const ImputSearch = () => {

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div className='content-search'>
            <input className='input-search' type='text' placeholder='Pesquisar palavra no dicionário' />
            <div class="icon-search"><SearchOutlined /></div>
            <div class="icon-regioes"><img class="content_regioes" src={regioes} onClick={showModal} /></div>

            <Modal
                visible={visible}
                title=""
                onOk={handleOk}
                onCancel={handleCancel}
                style={{ borderRadius: "20px" }}
                width={400}
                footer={[
                    <Button key="back" type="primary" onClick={handleCancel} shape="round">
                        Cancelar
                    </Button>,
                ]}
            >
                <div className='itens-modal'>
                    <p> </p>
                </div>
                <div className='itens-modal'>
                    <p>Norte </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>Nordeste </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>Sul </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>Sudeste </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>Centro-Oeste </p>
                    <RightOutlined />
                </div>
            </Modal>
        </div>
    );
};

export default ImputSearch;