import React from 'react'
import classnames from 'classnames'
import './style.scss'

export interface IInputProps{
  value?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rightBtnText?: string;
  rightBtnClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Input: React.FC<IInputProps> = (props) => {
  const { type, value, onChange, disabled, placeholder, rightBtnText, rightBtnClick } = props
  const boxClass = classnames('input-box d-flex ai-center')
  return (
    <div className={boxClass}>
      <input className="flex-1 input" type={type} value={value} disabled={disabled} placeholder={placeholder} onChange={onChange}/>
      {rightBtnText ? <span onClick={rightBtnClick}>{rightBtnText}</span> : null}
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
}
export default Input