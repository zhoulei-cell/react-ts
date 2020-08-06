import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes'
import 'normalize.css'
import './index.css'
import './assets/hotcss/hotcss'

ReactDOM.render(
  <Router>
    <Switch>
      {
        routes.map((route, index) => (
          <Route path={route.path} component={route.component} key={index}></Route>
        ))
      }
      <Redirect to="/index"/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
