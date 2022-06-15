import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Image, Button } from 'antd';
import logo from '../../../imagens/logo.png';
import {
    UserOutlined,
    SearchOutlined,
    SettingOutlined,
    FileSearchOutlined,
    LogoutOutlined,
    ClockCircleOutlined,
    PlusCircleOutlined,
    PlusOutlined
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
                        label: <Link to='/pesquisa'>Pesquisar</Link>,
                    },
                    {
                        key: 'search-dictionary',
                        icon: <FileSearchOutlined />,
                        label: <Link to='/dicionario'>Dicionário</Link>,
                    },
                    {
                        key: 'addIn-dictionary',
                        icon: <PlusOutlined />,
                        label: <Link to='/adicionar'>Novo</Link>,
                    },
                    {
                        key: 'pendding',
                        icon: <ClockCircleOutlined />,
                        label: 'Pendentes',
                    },
                    {
                        key: 'settings',
                        icon: <SettingOutlined />,
                        label: <Link to='/config'>Configurações</Link>,
                    },
                    {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: <Link to='/'>Sair</Link>,
                    }
                ]}
            />
        </div>
    );
};

export default MenuLayout;