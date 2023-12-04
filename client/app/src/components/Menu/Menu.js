import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type, onClick) {
  return {
    key,
    icon,
    children,
    label,
    type,
    onClick
  };
}

const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Previsão de alunos', '2', <PieChartOutlined />),
];

const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
      >
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default MenuBar;
