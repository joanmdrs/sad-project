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
  getItem('Home', '1', <HomeOutlined />, null, null, () => { window.location.href="/" }),
  getItem('Previsão de alunos', 'sub1', <PieChartOutlined />, null, null, () => { window.location.href="/previsoes"  }),
];

const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (e) => {
    const clickedItem = items.find(item => item.key === e.key);
    if (clickedItem && clickedItem.onClick) {
      clickedItem.onClick();
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{
      padding: '10px',
    }}>
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
        onClick={handleMenuClick}

        style={{
          padding: '10px',
        }}
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
