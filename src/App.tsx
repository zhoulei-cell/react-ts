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

const defaultValue = {
  state: {
    num: sessionStorage.getItem('route_num') || 0
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
    console.log(location.state, defaultValue)
    if (location.state.num < defaultValue.state.num) {
      console.log('you')
      name = 'fade-right'
    } else {
      console.log('zuo')
      name = 'fade-left'
    }
    defaultValue.setState(location.state)
    sessionStorage.setItem('route_num', location.state.num)
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
              <Redirect to="/index/home"/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <TabBar>
        <TabBarItem path='/index/home' to={{pathname: '/index/home', state: {num: 0}}} iconPath={home} selectedIconPath={selectedHome} text="主页"></TabBarItem>
        <TabBarItem path='/index/mine' to={{pathname: '/index/mine', state: {num: 1}}} iconPath={mine} selectedIconPath={selectedMine} text="我的"></TabBarItem>
      </TabBar>
    </div>
  )
}

export default App
