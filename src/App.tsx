import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
//import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom"
//import "./assets/iconfont/iconfont.css"
import { TabBar, TabBarItem } from './components/TabBar'
import home from './assets/images/home/home.png'
import selectedHome from './assets/images/home/selectedHome.png'
import mine from './assets/images/home/mine.png'
import selectedMine from './assets/images/home/selectedMine.png'
import back from './assets/images/nav/back.png'
import share from './assets/images/nav/share.png' 
import Home from './pages/Home'
import Mine from './pages/Mine'

function App() {
  // console.log(useHistory())
  // console.log(useLocation())
  // console.log(useParams())
  // console.log(useRouteMatch())
  const leftClick = () => {
    console.log('返回')
  }
  const rightClick = () => {
    console.log('分享')
  }
  return (
    <div className="App">
      <NavBar title="主题" leftText="返回" leftImg={back} rightText="分享" rightImg={share} leftClick={leftClick} rightClick={rightClick}></NavBar>
      <div className="container">
        <Switch>
          <Route exact path="/index/home" component={Home} />
          <Route exact path="/index/mine" component={Mine} />
          <Redirect to="/index/home"/>
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
