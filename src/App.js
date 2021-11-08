import React, { useState } from "react";
import { Layout } from "antd";
import Sider from "./Sider";
import "./styles.css";
import Overview from './pages/HomePage'
import Data from './pages/Data.js'
import Accident from './pages/Accident.js'
import Speed from './pages/Speed.js'
import Analysis from './pages/Analysis.js'
import Github from './pages/Github.js'
const { Header, Content, Footer } = Layout;
export default function App() {
  const style = {
    fontSize: "30px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const components = {
    1: <div style={style}> <Overview/> </div>,
    2: <div style={style}> <Data/></div>,
    3: <div style={style}> <Accident/></div>,
    4: <div style={style}> <Speed/></div>,
    5: <div style={style}> <Analysis/></div>,
    6: <div style={style}> <Github/></div>
  };

  const [render, updateRender] = useState(1);

  const handleMenuClick = menu => {
    updateRender(menu.key);
  };

  return (
    <div className="App">
      <Layout 
      style={{ minHeight: "100vh"}}>
        <Sider 
        handleClick={handleMenuClick}
         />
        <Layout>
          <Content>{components[render]}</Content>
        </Layout>
      </Layout>
    </div>
  );
}
