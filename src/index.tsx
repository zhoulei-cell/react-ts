import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import routes from './routes'
import 'normalize.css'
import './index.css'
import "./assets/hotcss/hotcss"

ReactDOM.render(
  <Router>
    <Switch>
      {
        routes.map((route, index) => (
          <Route path={route.path} component={route.component} key={index}></Route>
        ))
      }
    </Switch>
  </Router>,
  document.getElementById('root')
);
