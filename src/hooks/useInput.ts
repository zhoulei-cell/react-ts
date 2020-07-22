import React, { useState } from 'react'
export type Change = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useInput: (val: string) => [string, Change] = (val = '') => {
  const [value, setValue] = useState(val)

  const change: Change = (e) => {
    setValue(e.target.value)
  }

  return [value, change]
}

export default useInput