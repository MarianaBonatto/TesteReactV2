import { Menu, Layout } from 'antd';
import './index.css'
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';
import logo from '../../../imagens/logo.png';
import iconLang from '../../../imagens/icon-lang.png';
import librasSinal from '../../../imagens/libra-laranja.png';
import iconSinalProfile from '../../../imagens/icon-sinal-profile.png';

import { HomeOutlined, FileSearchOutlined, ClockCircleOutlined } from '@ant-design/icons';

// const { languageChange } = { ...props };
const MenuHorizontal = props => {

    const { languageChange } = { ...props };

    return (
        <Layout.Sider className="layout-sider-menu">
            {/* style={{ position: 'sticky', top: 0, zIndex: 1000 }} */}

            <Menu mode="horizontal" defaultSelectedKeys={['']} className='menu-pai'>
                <Menu.Item key="logo" style={{ width: '7%' }} className='menu-logo-class'>
                    <img src={librasSinal} style={{ width: '100%' }} /> <span className='lw1-class'>Lib</span><span className='lw2-class'>Web</span>
                </Menu.Item>

                <Menu.Item key="inicio" icon={<HomeOutlined />} className='menu-inicio-class'>
                    <Link to='/'>{i18n.t('menu.inicio')}</Link>
                </Menu.Item>

                <Menu.Item key="dict" icon={<FileSearchOutlined />} >
                    <Link to='/dicionario'>{i18n.t('menu.dicionario')}</Link>
                </Menu.Item>

                <Menu.Item key="pend" icon={<ClockCircleOutlined />} >
                    <Link to='/pendente'>{i18n.t('menu.pendentes')}</Link>
                </Menu.Item>

                <Menu.SubMenu key="lang" title="" style={{ width: '4.5%' }} icon={<img src={iconLang} style={{ width: '100%' }} />} className='menu-lang'>

                    <Menu.Item key="pt-BR" icon='' onClick={() => languageChange("pt-BR")}>
                        {i18n.t('idioma.pt')}
                    </Menu.Item>
                    <Menu.Item key="en-US" icon='' onClick={() => languageChange("en-US")}>
                        {i18n.t('idioma.en')}
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="perfil" style={{ width: '5%' }} icon={<img src={iconSinalProfile} style={{ width: '100%' }} />}>
                    <Menu.Item key="profile" icon='' >
                        <Link to='/perfil'>{i18n.t('menu.perfil')}</Link>
                    </Menu.Item>
                    <Menu.Item key="new" icon='' >
                        <Link to='/adicionar'>{i18n.t('menu.novo')}</Link>
                    </Menu.Item>
                </Menu.SubMenu>


                {/* <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
                <Menu.Item key="two" icon={<AppstoreOutlined />}>
                    Navigation Two
                </Menu.Item>
                <Menu.Item key="three" icon={<AppstoreOutlined />}>
                    Navigation Three
                </Menu.Item>
                <Menu.ItemGroup title="Item Group">
                    <Menu.Item key="four" icon={<AppstoreOutlined />}>
                        Navigation Four
                    </Menu.Item>
                    <Menu.Item key="five" icon={<AppstoreOutlined />}>
                        Navigation Five
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu> */}
            </Menu >
        </Layout.Sider>

    );
};

export default MenuHorizontal;