import React, { Fragment } from 'react'
import Button, { ButtonType, ButtonSize } from '../../components/Button'
import Input from '../../components/Input'

export default function index() {
  return (
    <Fragment>
      <div style={{padding: '20px 0'}}>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Normal} disabled={true}>primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Normal}>primary</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Normal}>primary</Button>
      </div>
      <div style={{padding: '20px'}}>
        <Input placeholder="请输入手机号"/>
        <Input placeholder="请输入验证码" rightBtnText="获取验证码"/>
        <Input placeholder="请输入验证码" rightBtnText="获取验证码" disabled={true}/>
      </div>
    </Fragment>
  )
}
