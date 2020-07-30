import React from 'react'
import { Route, Link } from 'react-router-dom'
import './TabBarItem.scss'

export interface IProps{
  text?: string;
  path: string;
  icon?: string;
  iconPath?: string;
  selectedIconPath?: string;
  color?: string;
  selectedColor?: string;
}

export interface IColorStyle{
  color?: string;
}

const TabBarItem: React.FC<IProps> = (props) => {
  const { text, path, icon, iconPath, selectedIconPath, color, selectedColor } = props
  return (<Route path={path} exact children={(props) => {
    const style: IColorStyle = {color: props.match ? selectedColor : color}
    return (<Link to={path} className="tab-bar-item flex-1 d-flex fd-column jc-center ai-center">
      {iconPath ? <img className="icon-img" src={props.match ? selectedIconPath : iconPath} alt="icon"/> : null}
      {icon ? <i className={icon} style={style}></i> : null}
      {text ? <span className="text" style={style}>{text}</span> : null}
    </Link>)
    }}/>
  )
}

TabBarItem.defaultProps = {
  color: "#777",
  selectedColor: '#5c7efa'
}

export default TabBarItem