import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar'
//import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"
//import "./assets/iconfont/iconfont.css"
import { TabBar, TabBarItem } from './components/TabBar'
import home from './components/TabBar/home/home.png'
import selectedHome from './components/TabBar/home/selectedHome.png'
import mine from './components/TabBar/home/mine.png'
import selectedMine from './components/TabBar/home/selectedMine.png'
import Home from './pages/Home'
import Mine from './pages/Mine'

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
      <div className="container">
        <Switch>
          <Route exact path="/index/home" component={Home} />
          <Route exact path="/index/mine" component={Mine} />
        </Switch>
      </div>
      <TabBar>
        <TabBarItem path="/index/home" iconPath={home} selectedIconPath={selectedHome} text="主页"></TabBarItem>
        <TabBarItem path="/index/mine" iconPath={mine} selectedIconPath={selectedMine} text="我的"></TabBarItem>
      </TabBar>
    </div>
  );
}

export default App;
