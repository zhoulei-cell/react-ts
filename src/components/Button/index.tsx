import React from 'react'
import classnames from 'classnames'
import './style.scss'

export enum ButtonSize {
  Normal = "nm",
  Large = "lg",
  Small = "sm"
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger"
}

export interface IButtonProps {
  className?: string;
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {btnType, size, disabled, children, className} = props 
  const name = classnames(className, 'btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: disabled
  })
  return (
    <button className={name} disabled={disabled}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
  size: ButtonSize.Normal,
  className: ''
}

export default Button