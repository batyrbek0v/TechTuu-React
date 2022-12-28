import React from 'react'
import cls from './PopUp.module.scss'
import succesImg from '../../../../assets/img/succes-popUp-img.png'
import errorImg from '../../../../assets/img/error-popUp-img.png'

const PopUp = (
  {
    isPosted,
    notPosted,
    closePopUp,
    closeErrorPopUp,
    title,
    setInputHasError,
    setName,
    setEmail
  }) => {

  const closingPopUp = () => {
    isPosted && closePopUp(false)
    notPosted && closeErrorPopUp(false)
    setInputHasError(false)
  }
  return (
    <>
      <div className={!isPosted && !notPosted ? cls.overley : cls.open}>
        <div className={cls.popUp}>
          <div className={cls.popUpBlock}>
            <div className={cls.popUpImgBlock}>
              <img src={isPosted ? succesImg : errorImg} alt="succes checkMark " />
            </div>
            <h1>{title ? title : 'Woohoo, success!'}</h1>
            <p>
              {
                !isPosted
                  ? 'We apologize, something went wrong with your order.'
                  : 'Your order has successfully been submitted.'

              }
            </p>
            <p>
              {
                isPosted
                  ? 'We will contact you as soon as possible.'
                  : 'Please try reload the site'
              }
            </p>
            <button className={cls.popUpBtn} onClick={closingPopUp}>
              {!isPosted ? 'Retry' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp