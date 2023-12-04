import React from 'react';
import { LineChartOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Routes from '../../routes';
import MenuBar from '../Menu/Menu';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [LineChartOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: "Estimativa de Alunos"
    
  };
});

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
        <div className="demo-logo" />
        
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          {/* <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          /> */}

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