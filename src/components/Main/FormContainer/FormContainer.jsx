import React from 'react'
import useCrud from '../../../API/Hooks/useCrud'
import Title from '../../UI/Title/Title'
import Contacts from './Contacts/Contacts'
import Form from './Form/Form'
import cls from './FormContainer.module.scss'
import PopUp from './PopUp/PopUp'

const FormContainer = () => {

  const {
    actions,
    popUp,
    setPopUp,
    popUpError,
    setPopUpError,
    errMessage
  } = useCrud()

  const [names, setNames] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [content, setContent] = React.useState('')
  const [inputHasError, setInputHasError] = React.useState(false)


  const handleSubmit = e => {
    e.preventDefault()

    if (!names.length || !email.length) {
      setInputHasError(true)
    } else {
      actions.post({
        email: email,
        content: content,
        name: names,
      })
    }
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
            inputHasError={inputHasError}
          />
          {
            popUp && <PopUp
              setName={setNames}
              isPosted={popUp}
              closePopUp={setPopUp}
              setInputHasError={setInputHasError}
              title={errMessage}
            />

          }
          {
            popUpError && <PopUp
              setName={setNames}
              notPosted={popUpError}
              setEmail={setEmail}
              closeErrorPopUp={setPopUpError}
              setInputHasError={setInputHasError}
              title={errMessage}
            />
          }
        </div>
      </div>
    </>
  )
}

export default FormContainer