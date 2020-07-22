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

type NativeButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
// type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLButtonElement>
//export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
export type ButtonProps = Partial<NativeButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {btnType, size, disabled, children, className, ...resetProps} = props 
  const name = classnames(className, 'btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: disabled
  })
  return (
    <button className={name} disabled={disabled} {...resetProps}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
  size: ButtonSize.Normal,
  className: ''
}

export default Button