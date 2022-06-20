import React, { useState } from 'react';
import './index.css';
import { i18n } from '../../../translate/i18n';

import {
    Input,
    Button,
    Select,
    Divider,
    Card,
    Space,
    Comment,
    Avatar,
    Upload
} from 'antd';

import {
    InboxOutlined
} from '@ant-design/icons';

const { Option } = Select;
const { Dragger } = Upload;
const { Search } = Input;

class NovaPalavraVideo extends React.Component {

    state = {
        collapsed: false,
        palavra: '',
        arrayPalavras: [],
        post: {
            palavra: '',
            linkVideo: '',
        },
        postRender: {
            palavra: '',
            linkVideo: ''
        }
    };

    render() {
        return (
            <Card
                className='card'
                style={{
                    width: '30%',
                    borderRadius: 15,
                    boxShadow: '2px 2px 2px #D6D6D6'
                }}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Input.Group compact>
                        <Input style={{ width: 'calc(100% - 45px)' }} placeholder={i18n.t('novo.adicionarPalavra')}
                            onChange={evt => this.inserePalavra(evt.target.value)} /> {/* 100px */}
                        <Button
                            onClick={this.onClick}
                            type="primary"
                            style={{
                                borderColor: '#ED6E0C',
                                background: '#ED6E0C',
                            }}>
                            +
                        </Button>
                    </Input.Group>
                    {/* --------------------------------------------------------- */}
                    <Select
                        style={{ width: '100%' }} //60px
                        showSearch
                        placeholder={i18n.t('novo.selecionePalavra')}
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        {/* {palavras} */}
                    </Select>
                    {/* -------------------------------------------------- */}
                    <Select
                        style={{ width: '100%' }} //60px
                        showSearch
                        placeholder={i18n.t('novo.selecioneRegiao')}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>

                        <Option value="0">. . .</Option>
                        <Option value="1">{i18n.t('regioes.norte')}</Option>
                        <Option value="2">{i18n.t('regioes.nordeste')}</Option>
                        <Option value="3">{i18n.t('regioes.sul')}</Option>
                        <Option value="4">{i18n.t('regioes.sudeste')}</Option>
                        <Option value="5">{i18n.t('regioes.centroOeste')}</Option>
                    </Select>
                    {/* ----------------------------------------- */}
                    <Dragger>
                        {/* <Dragger {...props}> */}
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined
                                style={{
                                    color: '#ED6E0C',
                                }} />
                        </p>
                        <p className="ant-upload-text">{i18n.t('novo.adicionarVideo')}</p>
                    </Dragger>

                    {/* ------------------------------------------ */}

                    <Space
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <Button
                            style={{
                                background: '#ED6E0C',
                                borderColor: '#ED6E0C'
                            }}
                            type="primary">{i18n.t('botoes.cancelar')}</Button>

                        <Button style={{
                            borderColor: '#ED6E0C',
                            color: '#ED6E0C',
                        }}
                            onClick={this.newPost}
                        >{i18n.t('botoes.salvar')}</Button>
                    </Space>
                </Space>
            </Card>
        );
    };
}


export default NovaPalavraVideo;