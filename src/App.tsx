import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import "./assets/iconfont/iconfont.css"

function App() {
  return (
    <div className="App">
      <NavBar title="主题" leftText="返回" leftIcon="iconfont icon-fanhui" rightText="分享"></NavBar>
    </div>
  );
}

export default App;
