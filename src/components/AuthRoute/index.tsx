import React from 'react'
import { Route } from 'react-router-dom'

interface IProps{
  path: string;
  component: React.FC | React.ComponentClass;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

const AuthRoute: React.FC<IProps> = ({component: Component, ...reset}) => {
  return <Route {...reset} children={props => {
    return <Component />
  }}></Route>
}

export default AuthRoute