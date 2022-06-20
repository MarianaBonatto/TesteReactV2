import React, { useState } from 'react';
import './index.css';

import { i18n } from '../../../translate/i18n';

import { Input, Modal, Button } from 'antd'
import { SearchOutlined, RightOutlined } from '@ant-design/icons';

import logo from '../../../imagens/logoBranca.png';
import regioes from '../../../imagens/regioes.jpg';

const { Search } = Input;

const ImputSearchCommon = () => {

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
        <div className='content-search-common'>
            <input className='input-search-common' type='text' placeholder={i18n.t('pesquisa.input')} />
            <div class="icon-search-common"><SearchOutlined /></div>
            <div class="icon-regioes-common"><img class="content_regioes-common" src={regioes} onClick={showModal} /></div>

            <Modal
                visible={visible}
                title=""
                onOk={handleOk}
                onCancel={handleCancel}
                style={{ borderRadius: "20px" }}
                width={400}
                footer={[
                    <Button key="back" type="primary" onClick={handleCancel} shape="round"
                        style={{
                            borderColor: '#ED6E0C',
                            background: '#ED6E0C'
                        }}>
                        {i18n.t('botoes.cancelar')}
                    </Button>,
                ]}
            >
                <div className='itens-modal'>
                    <p> </p>
                </div>
                <div className='itens-modal'>
                    <p>{i18n.t('regioes.norte')} </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>{i18n.t('regioes.nordeste')} </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>{i18n.t('regioes.sul')} </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>{i18n.t('regioes.sudeste')} </p>
                    <RightOutlined />
                </div>
                <div className='itens-modal'>
                    <p>{i18n.t('regioes.centroOeste')} </p>
                    <RightOutlined />
                </div>
            </Modal>
        </div>
    );
};

export default ImputSearchCommon;