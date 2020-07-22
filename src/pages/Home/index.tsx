import React, { Fragment } from 'react'
import Button, { ButtonType, ButtonSize } from '../../components/Button'
import Input from '../../components/Input'
import useInput from '../../hooks/useInput'

function Home() {
  const [phone, phoneChange] = useInput('')
  const [code, codeChange] = useInput('')
  return (
    <Fragment>
      <div style={{padding: '20px 0'}}>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Normal} disabled={true}>primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Normal}>primary</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Normal}>primary</Button>
      </div>
      <div style={{padding: '20px'}}>
        <Input placeholder="请输入手机号" value={phone} onChange={phoneChange}/>
        <Input placeholder="请输入验证码" rightBtnText="获取验证码" value={code} onChange={codeChange}/>
        <Input placeholder="请输入验证码" rightBtnText="获取验证码" disabled={true}/>
      </div>

      <div style={{padding: '20px'}}>
        <div>手机号： {phone}</div>
        <div>验证码： {code}</div>
      </div>
    </Fragment>
  )
}

export default Home
