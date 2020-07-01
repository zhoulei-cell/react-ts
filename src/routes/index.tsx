import React from "react"
import App from "../App"

interface IRoutes{
  path: string;
  component: React.FC | React.ComponentClass;
}

const routes: IRoutes[] = [
  {
    path: '/',
    component: App
  }
]

export default routes