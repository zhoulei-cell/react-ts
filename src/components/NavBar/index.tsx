import React from 'react'
import classnames from 'classnames'
import "./style.scss"

interface IProps {
  border?: boolean;
  title?: string;
  leftText?: string;
  leftImg?: string;
  leftIcon?: string;
  leftClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  rightText?: string;
  rightImg?: string;
  rightIcon?: string;
  rightClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const NavBar: React.FC<IProps> = (props) => {
  const { title, leftText, leftImg, leftIcon, border, rightText, rightImg, rightIcon, leftClick, rightClick } = props
  const navClassName = classnames('nav-bar', {border: border})
  return (<div className={navClassName}>
    <div className="nav-bar-left d-flex ai-center" onClick={leftClick}>
      {leftIcon ? (<i className={leftIcon}></i>) : null}
      {leftImg ? (<img src={leftImg} alt=""/>) : null}
      {leftText ? (<span>{leftText}</span>) : null}
    </div>
    <div className="nav-bar-center">{title}</div>
    <div className="nav-bar-right d-flex jc-end ai-center" onClick={rightClick}>
      {rightText ? (<span>{rightText}</span>) : null}
      {rightImg ? (<img src={rightImg} alt=""/>) : null}
      {rightIcon ? (<i className={rightIcon}></i>) : null}
    </div>
  </div>)
}

NavBar.defaultProps = {
  border: true
}

export default NavBar