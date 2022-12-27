import React from 'react'
import cls from './Input.module.scss'

const Input = ({ type, placholder, onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placholder}
        className={cls.formInput}
        onChange={e => onChange(e.target.value)}
      />
    </>
  )
}

export default Input