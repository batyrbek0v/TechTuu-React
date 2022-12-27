import React from 'react'
import Input from '../../../UI/FormInput/Input'
import FormTitle from '../../../UI/Title/FormTitle'
import cls from './Form.module.scss'


const Form = ({ setName, setEmail, setContent, onSubmit, name, email, content }) => {



  return (
    <>
      <div className={cls.formInputBlock}>
        <FormTitle title='Leave us a message' />
        <form className={cls.form} onSubmit={onSubmit}>
          <Input
            type='text'
            placholder='Name'
            value={name}
            onChange={setName}
          />
          <Input
            type='email'
            placholder='Email'
            value={email}
            onChange={setEmail}
          />
          <textarea
            className={cls.formInput}
            value={content}
            placeholder="Write your message here"
            onChange={e => setContent(e.target.value)}
          >
          </textarea>
          <button>SEND</button>
        </form>
      </div>
    </>
  )
}

export default Form