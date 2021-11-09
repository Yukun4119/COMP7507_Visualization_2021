import React from "react";
import { Menu, Layout } from "antd";

const { SubMenu } = Menu;

export default function Sider(props) {
  const { handleClick } = props;
  return (
    <Layout.Sider 
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
    }}>
      <Menu theme="dark" mode="inline" openKeys={"sub1"} defaultSelectedKeys={['1']}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>Group 16</span>
            </span>
          }
        >
          <Menu.Item key="1" onClick={handleClick}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" onClick={handleClick}>
            Data
          </Menu.Item>
          <Menu.Item key="3" onClick={handleClick}>
            Accident
          </Menu.Item>
          {/* <Menu.Item key="4" onClick={handleClick}>
            Speed
          </Menu.Item> */}
          <Menu.Item key="5" onClick={handleClick}>
            Analysis
          </Menu.Item>
          <Menu.Item key="6" onClick={handleClick}>
            About
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
}
