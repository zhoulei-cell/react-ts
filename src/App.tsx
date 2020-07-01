import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
//import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"
//import "./assets/iconfont/iconfont.css"

function App() {
  // console.log(useHistory())
  // console.log(useLocation())
  // console.log(useParams())
  // console.log(useRouteMatch())
  const leftClick = () => {
    console.log(1)
  }
  return (
    <div className="App">
      <NavBar title="主题" leftText="返回" rightText="分享" leftClick={leftClick}></NavBar>
    </div>
  );
}

export default App;
