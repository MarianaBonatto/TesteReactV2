import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { i18n } from '../../../translate/i18n';

import { Menu, Image, Button, Switch } from 'antd';
import logo from '../../../imagens/logo.png';
import {
    UserOutlined,
    SearchOutlined,
    SettingOutlined,
    FileSearchOutlined,
    LogoutOutlined,
    ClockCircleOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    TranslationOutlined
} from '@ant-design/icons';

const MenuLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256 }}>
            <Button onClick={toggleCollapsed} style={{ borderRadius: 10, border: 0 }}>
                <img style={{ height: '1.5rem', width: 'auto', padding: 3 }}
                    src={logo} />
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                style={{ maxWidth: '70%' }}
                inlineCollapsed={collapsed}
                items={[
                    {
                        key: 'user',
                        icon: <UserOutlined />,
                        label: 'Nathaly Oliveira',
                    },
                    {
                        key: 'search',
                        icon: <SearchOutlined />,
                        label: <Link to='/pesquisa'>{i18n.t('menu.pesquisar')}</Link>,
                    },
                    {
                        key: 'search-dictionary',
                        icon: <FileSearchOutlined />,
                        label: <Link to='/dicionario'>{i18n.t('menu.dicionario')}</Link>,
                    },
                    {
                        key: 'addIn-dictionary',
                        icon: <PlusOutlined />,
                        label: <Link to='/adicionar'>{i18n.t('menu.novo')}</Link>,
                    },
                    {
                        key: 'pendding',
                        icon: <ClockCircleOutlined />,
                        label: <Link to='/'>{i18n.t('menu.pendentes')}</Link>,
                    },
                    {
                        key: 'settings',
                        icon: <SettingOutlined />,
                        label: <Link to='/config'>{i18n.t('menu.configuracoes')}</Link>,
                    },
                    // {
                    //     key: 'language',
                    //     icon: <TranslationOutlined />,
                    //     label: 'Idioma',
                    //     children: [
                    //         {
                    //             key: 'pt',
                    //             label: 'Português',
                    //         },
                    //         {
                    //             key: 'en',
                    //             label: 'English',
                    //         },
                    //     ]
                    // },
                    {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: <Link to='/'>{i18n.t('menu.sair')}</Link>,
                    }
                ]}
            />
        </div>
    );
};

export default MenuLayout;