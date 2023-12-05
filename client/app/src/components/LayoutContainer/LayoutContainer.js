import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Routes from '../../routes';
import MenuBar from '../Menu/Menu';

const { Header, Content, Sider } = Layout;

const LayoutContainer = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo">
          
        </div>
        
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <MenuBar />
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
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Previsões</Breadcrumb.Item>
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