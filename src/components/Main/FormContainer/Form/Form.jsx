import React from 'react'
import Input from '../../../UI/FormInput/Input'
import FormTitle from '../../../UI/Title/FormTitle'
import cls from './Form.module.scss'


const Form = () => {
  return (
    <>
      <div className={cls.formInputBlock}>
        <FormTitle title='Leave us a message' />
        <form className={cls.form}>
          <Input type='text' placholder='Name' />
          <Input type='email' placholder='Email' />
          <textarea className={cls.formInput} placeholder="Write your message here"></textarea>
          <button>SEND</button>
        </form>
      </div>
    </>
  )
}

export default Form