import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import "./assets/hotcss/hotcss"

ReactDOM.render(
  <Router>
    <Switch>
      {
        routes.map((route, index) => (
          <Route exact path={route.path} component={route.component} key={index}></Route>
        ))
      }
    </Switch>
  </Router>,
  document.getElementById('root')
);
