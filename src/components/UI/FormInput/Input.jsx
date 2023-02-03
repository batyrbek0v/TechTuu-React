// import { log } from 'console'
import React from 'react'
import cls from './Input.module.scss'

const Input = ({ type, placeholder, onChange, empty }) => {


  return (
    <>
      <input
        type={type}
        placeholder={!empty ? placeholder : `${placeholder} cannot be empty`}
        className={!empty ? cls.formInput : cls.inputEmpty}
        onChange={e => onChange(e.target.value)}
      />
    </>
  )
}

export default Input
