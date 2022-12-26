import React from 'react'
import cls from './Input.module.scss'

const Input = ({ type, placholder, event }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placholder}
        className={cls.formInput}
        onChange={''}
      />
    </>
  )
}

export default Input