import React from "react"
import App from "../App"
import News from "../pages/News"

interface IRoutes{
  path: string;
  component: React.FC | React.ComponentClass;
}

const routes: IRoutes[] = [
  {
    path: '/index',
    component: App
  },
  {
    path: '/news',
    component: News
  }
]

export default routes