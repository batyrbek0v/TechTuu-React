import React from 'react'
import Title from '../../UI/Title/Title'
import Contacts from './Contacts/Contacts'
import Form from './Form/Form'
import cls from './FormContainer.module.scss'

const FormContainer = () => {
  return (
    <>
      <div className={cls.formContainer}>
        <Title title='Get in touch' />
        <div className={cls.formContainerFlex}>
          <Contacts />
          <Form />
        </div>
      </div>
    </>
  )
}

export default FormContainer