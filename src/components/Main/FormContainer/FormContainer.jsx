import React from 'react'
import { api } from '../../../API/api'
import useCrud from '../../../API/Hooks/useCrud'
import Title from '../../UI/Title/Title'
import Contacts from './Contacts/Contacts'
import Form from './Form/Form'
import cls from './FormContainer.module.scss'
import PopUp from './PopUp/PopUp'

const FormContainer = () => {

  const { actions, popUp, setPopUp, popUpError } = useCrud()

  const [names, setNames] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [content, setContent] = React.useState('')


  const handleSubmit = e => {
    e.preventDefault()

    actions.post({
      email: email,
      content: content,
      name: names,
    })

    setNames('')
    setEmail('')
    setContent('')

    console.log(popUp);
    console.log(popUpError);
  }


  return (
    <>
      <div className={cls.formContainer}>
        <Title title='Get in touch' />
        <div className={cls.formContainerFlex}>
          <Contacts />
          <Form
            name={names}
            setName={setNames}
            email={email}
            setEmail={setEmail}
            content={content}
            setContent={setContent}
            onSubmit={handleSubmit}
          />
          <PopUp isPosted={popUp} closePopUp={setPopUp}/>
        </div>
      </div>
    </>
  )
}

export default FormContainer