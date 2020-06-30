import React from 'react'
import classnames from 'classnames'
import "./style.scss"

interface IProps {
  border?: boolean;
  title?: string;
  leftText?: string;
  leftIcon?: string;
  leftClick?: () => void;
  rightText?: string;
  rightIcon?: string;
  rightClick?: () => void;
}

const NavBar: React.FC<IProps> = (props) => {
  const { title, leftText, leftIcon, border, rightText, rightIcon } = props
  const navClassName = classnames('nav-bar', {border: border})
  return (<div className={navClassName}>
    <div className="nav-bar-left d-flex ai-center">
      {leftIcon ? (<i className={leftIcon}></i>) : null}
      {leftText ? (<span>{leftText}</span>) : null}
    </div>
    <div className="nav-bar-center">{title}</div>
    <div className="nav-bar-right d-flex jc-end ai-center">
      {rightText ? (<span>{rightText}</span>) : null}
      {rightIcon ? (<i className={rightIcon}></i>) : null}
    </div>
  </div>)
}

NavBar.defaultProps = {
  border: true
}

export default NavBar