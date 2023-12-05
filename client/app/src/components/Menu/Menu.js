import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { FaPersonRunning } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

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
  getItem('Previsão de alunos', 'sub1', <GoGraph />, null, null, () => { window.location.href="/previsoes"  }),
  getItem('Evasão', 'sub2', <FaPersonRunning />, null, null, () => {window.location.href="/evasao"})
];

const MenuBar = ({collapsed}) => {
  

  const handleMenuClick = (e) => {
    const clickedItem = items.find(item => item.key === e.key);
    if (clickedItem && clickedItem.onClick) {
      clickedItem.onClick();
    }
  };



  return (
    <div style={{
      padding: '10px',
    }}>
  
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        onClick={handleMenuClick}
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
