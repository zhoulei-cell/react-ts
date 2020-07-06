import React from "react"
import App from "../App"
import News from "../pages/News"
import Home from "../pages/Home"

interface IRoutes{
  path: string;
  component: React.FC | React.ComponentClass;
  children?: IRoutes[]
}

const routes: IRoutes[] = [
  {
    path: '/index',
    component: App,
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  },
  {
    path: '/news',
    component: News
  }
]

export default routes