import React, {  } from 'react';
import './App.css';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
import Search from './pages/Search'
import storage from './utils/storage'

import AuthRoute from './components/AuthRoute'

storage.type("session")

const defaultValue = {
  state: {
    num: storage.get('route_num') || 0
  },
  setState(val: any) {
    this.state = val
  }
}

function App() {
  // console.log(useHistory())
  // console.log(useLocation())
  // console.log(useParams())
  // console.log(useRouteMatch())
  
  const location = useLocation<any>()
  const leftClick = () => {
    console.log('返回')
  }
  const rightClick = () => {
    console.log('分享')
  } 
  let name = 'fade-left'
  if (location.state) {
    if (location.state.num < defaultValue.state.num) {
      name = 'fade-right'
    } else {
      name = 'fade-left'
    }
    defaultValue.setState(location.state)
    storage.set('route_num', location.state.num)
  } 
  return (
    <div className="App">
      <NavBar title="主题" leftText="返回" leftImg={back} rightText="分享" rightImg={share} leftClick={leftClick} rightClick={rightClick}></NavBar>
      <div className="container">
        <TransitionGroup component={null} childFactory={child => React.cloneElement(child, {
          classNames: name
        })}>
          <CSSTransition 
            timeout={300}
            key={location.pathname}
          >
            <Switch location={location}>
              <Route exact path="/index/home" component={Home} />
              <Route exact path="/index/mine" component={Mine} />
              <AuthRoute exact path="/index/search" component={Search} />
              <Redirect to="/index/home"/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <TabBar>
        <TabBarItem path='/index/home' to={{pathname: '/index/home', state: {num: 0}}} iconPath={home} selectedIconPath={selectedHome} text="主页"></TabBarItem>
        <TabBarItem path='/index/search' to={{pathname: '/index/search', state: {num: 1}}} iconPath={mine} selectedIconPath={selectedMine} text="搜索"></TabBarItem>
        <TabBarItem path='/index/mine' to={{pathname: '/index/mine', state: {num: 2}}} iconPath={mine} selectedIconPath={selectedMine} text="我的"></TabBarItem>
      </TabBar>
    </div>
  )
}

export default App
