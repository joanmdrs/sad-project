import React, { useState } from 'react';
import './LayoutContainer.css';
import { Breadcrumb, Button, Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, HomeOutlined } from '@ant-design/icons';
import Routes from '../../routes';
import MenuBar from '../Menu/Menu';
import img from "../../assets/grafico.png";

const { Header, Content, Sider } = Layout;

const LayoutContainer = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (

    <Layout>
      <Header style={{color: '#fff', borderBottom: '1px solid #fff'}} className='content-header'>
        <img src={img} alt="Logo do Sistema de Previsões"/>
        <h4 style={{ margin: 0 }}>Sistema de Previsões</h4>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          style={{
            height: '100vh'
          }}
        >
          <div style={{
            padding: '10px'
          }}> 
            <Button
              type="primary"
              onClick={toggleCollapsed}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>'
          </div>
        
          <MenuBar collapsed={collapsed}/>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Realizando previsões</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutContainer;