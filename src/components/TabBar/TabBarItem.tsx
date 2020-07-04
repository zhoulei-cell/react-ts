import React from "react"
import { Route } from "react-router-dom"
import "./TabBarItem.scss"

interface IProps{
  text: string;
  path: string;
  icon: string;
  iconPath: string;
  selectedIconPath: string;
}

const TabBarItem: React.FC<IProps> = (props) => {
  const { text, path, icon, iconPath, selectedIconPath } = props
  /*return (<div className="tab-bar-item flex-1 d-flex fd-column jc-center ai-center">
    <img src="" alt=""/>
    <img src="" alt=""/>
    <span>{text}</span>
  </div>)*/
  return (<Route path={path} exact children={(props) => {
    return (<div className="tab-bar-item flex-1 d-flex fd-column jc-center ai-center">
      {iconPath ? <img className="icon-img" src={props.match ? selectedIconPath : iconPath} alt="图片"/> : null}
      {icon ? <i className={icon}></i> : null}
      <span className="text">{text}</span>
    </div>)
    }}/>
  )
}

export default TabBarItem