import React from "react"
import "./TabBarItem.scss"

interface IProps{
  text: string;
  icon: string;
  iconPath: string;
  selectedIconPath: string;
}

const TabBarItem: React.FC<IProps> = (props) => {
  const { text } = props
  return (<div className="tab-bar-item flex-1 d-flex fd-column jc-center ai-center">
    <img src="" alt=""/>
    <img src="" alt=""/>
    <span>{text}</span>
  </div>)
}

export default TabBarItem