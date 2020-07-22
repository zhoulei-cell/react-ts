import React from 'react'
import Button, { ButtonType, ButtonSize } from '../../components/Button'

export default function index() {
  return (
    <div>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Normal} disabled={true}>primary</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Normal}>primary</Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Normal}>primary</Button>
    </div>
  )
}
