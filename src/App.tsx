import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"
//import "./assets/iconfont/iconfont.css"

function App() {
  console.log(useHistory())
  console.log(useLocation())
  console.log(useParams())
  console.log(useRouteMatch())
  return (
    <div className="App">
      <NavBar title="主题" leftText="返回" leftIcon="iconfont icon-fanhui" rightText="分享"></NavBar>
    </div>
  );
}

export default App;
